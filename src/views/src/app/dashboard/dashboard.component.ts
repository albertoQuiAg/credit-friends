import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreditFriendsService } from '../_services/credit-friends.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NuevaSolicitudComponent } from '../_dialogs/nueva-solicitud/nueva-solicitud.component';
import { Usuario } from '../_clases/Usuario';
import { take, map } from 'rxjs/operators';
import { AngularFireList } from 'angularfire2/database';
import { Solicitud } from '../_clases/Solicitud';
import { Observable } from '@firebase/util';
import { Subscription } from 'rxjs';
import { PerfilComponent } from '../_dialogs/perfil/perfil.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public userData: Usuario;
  public solicitudesPendientes: Array<Solicitud>;
  public historial: Array<Solicitud>;
  public aVotar: Array<Solicitud>;
  private subs: Subscription[] = [];

  constructor(public _cfService: CreditFriendsService, public _router: Router, private dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getUserData();
    this.onSolicitudChange();
  }

  ngOnDestroy() {
    this.subs.forEach((s) => {
      s.unsubscribe();
    });
  }

  onLogout() {

    this._cfService.logout().then(() => {
      this._router.navigate(['/login']);
    });
    
  }

  onNuevaSolicitud() {
    this.dialog.open(NuevaSolicitudComponent, {
      height: '400px',
      width: '600px'
    });
  }

  getUserData() {
    this._cfService.afAuth.authState.pipe(take(1)).subscribe((user) => {
      this._cfService.db.object<Usuario>('usuarios/' + user.uid).snapshotChanges().pipe(take(1)).subscribe((userData) => {
        this.userData = { ...userData.payload.val(), uid : userData.key};

        this._cfService.userData = this.userData;

        this.getSolicitudesPendientes();
      });
    });
  }

  getSolicitudesPendientes() {
    this.solicitudesPendientes = [];
    this.historial = [];
    this.aVotar = [];
    
    let addSub:any = this._cfService.db.list<Solicitud>('/solicitudes', ref => ref.orderByChild('uid')).
      stateChanges(['child_added']).subscribe((solicitud) => {

        if (solicitud.payload.val().uid != this.userData.uid) {
          if(solicitud.payload.val().status == 'V') {
            this._cfService.db.object('usuarios/' + solicitud.payload.val().uid).valueChanges().pipe(take(1)).subscribe((resUser:Usuario) => {

              if (solicitud.payload.val().votantes) {
                let find = solicitud.payload.val().votantes.indexOf(this.userData.uid);
                
                if (find < 0) {
                  this.aVotar.push({ nombre: resUser.nombre,key: solicitud.key, ...solicitud.payload.val() });

                  this.snack.open(`${resUser.nombre} a creado una solicitud.`, 'OK', {
                    duration: 3600
                  });
                }
              } else {
                this.aVotar.push({ nombre: resUser.nombre,key: solicitud.key, ...solicitud.payload.val() });

                this.snack.open(`${resUser.nombre} a creado una solicitud.`, 'OK', {
                  duration: 3600
                });
              }

            });
          }
        } else {
          if (solicitud.payload.val().status == 'V') {
            this.solicitudesPendientes.push({ key: solicitud.key, ...solicitud.payload.val() });
          } else {
            this.historial.push({ key: solicitud.key, ...solicitud.payload.val() });
          }
        }
      });

    this.subs.push(addSub);
  }

  onSolicitudChange() {
    let changeSub:any = this._cfService.db.list<Solicitud>('solicitudes').stateChanges(['child_changed']).subscribe((solicitud) => {
      
      if (solicitud.payload.val().uid == this.userData.uid && solicitud.payload.val().status != 'V') {
        let indice:any = this.solicitudesPendientes.findIndex(x => x.key == solicitud.key);

        if (indice >= 0) {
          let moveSol: any = this.solicitudesPendientes.splice(indice, 1);
          this.historial.push(solicitud.payload.val());
        }
      } else {
        if (solicitud.payload.val().status != 'V') {
          let indice2:any = this.aVotar.findIndex(x => x.key == solicitud.key);

          if (indice2 >= 0) {
            let moveVotar: any = this.aVotar.splice(indice2, 1);
          }
        } else {
          let indice: any = this.solicitudesPendientes.findIndex(x => x.key == solicitud.key);

          if (indice >= 0) {
            this.solicitudesPendientes[indice].contra = solicitud.payload.val().contra;
            this.solicitudesPendientes[indice].favor = solicitud.payload.val().favor;
          }
        }
      }
    
    });

    this.subs.push(changeSub);
  }

  getPlazo(plazo:string) {
    return plazo == '1' ? '3 pagos: 5% de interés' : plazo == '2' ? '6 pagos: 7% de interés' : plazo == '3' ? '9 pagos: 12% de interés' : '';
  }

  onShowPerfil(solicitudData: Solicitud) {
    this.dialog.open(PerfilComponent, {
      data: solicitudData
    });
  }

  onVotar(voto:string, solicitud:Solicitud) {

    let indice:any = this.aVotar.findIndex(x => x.key == solicitud.key);
    this.aVotar.splice(indice,1);

    let upSolicitud: Solicitud = {
      contra: solicitud.contra,
      favor: solicitud.favor,
      fecha: solicitud.fecha,
      monto: solicitud.monto,
      plazo: solicitud.plazo,
      status: solicitud.status,
      total: solicitud.total,
      uid: solicitud.uid,
      votantes: solicitud.votantes
    }

    if (!upSolicitud.votantes) {
      upSolicitud.votantes = [];
    }

    upSolicitud.votantes.push(this.userData.uid);

    if (voto == 'a') {
      upSolicitud.favor += 1;
    } else {
      upSolicitud.contra += 1;
    }

    this._cfService.db.list<Solicitud>('solicitudes').update(solicitud.key, upSolicitud).then(() => {
      this.snack.open('Voto emitido correctamente.', 'OK', {
        duration: 3600
      })
    });
  }

  public timeUp(event: Solicitud): void {
  
    let indice:any = this.solicitudesPendientes.findIndex(x => x.key == event.key);

    let upSolicitud: Solicitud = {
      contra: this.solicitudesPendientes[indice].contra,
      favor: this.solicitudesPendientes[indice].favor,
      fecha: event.fecha,
      monto: event.monto,
      plazo: event.plazo,
      status: event.status,
      total: event.total,
      uid: event.uid
    }

    if (upSolicitud.favor > upSolicitud.contra) {
      upSolicitud.status = 'A'
    } else {
      upSolicitud.status = "R"
    }

    this._cfService.db.list<Solicitud>('solicitudes').update(event.key, upSolicitud).then(() => {
      if (upSolicitud.uid == this.userData.uid) {
        let status:string = upSolicitud.status == 'A' ? 'Aprobada' : 'Rechazada';
        this.snack.open(`Tu solicitud de $${upSolicitud.monto} fue ${status}.`, 'OK', {
          duration: 3600
        })
      }
    });
  }

}
