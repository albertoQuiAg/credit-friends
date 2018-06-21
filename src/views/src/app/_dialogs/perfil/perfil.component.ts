import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CreditFriendsService } from 'src/app/_services/credit-friends.service';
import { Solicitud } from '../../_clases/Solicitud';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public solicitudes: Observable<Solicitud[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _cfService: CreditFriendsService) { }

  ngOnInit() {
    this.solicitudes = this._cfService.db.list<Solicitud>('/solicitudes', ref => ref.orderByChild('uid').equalTo(this.data.uid)).valueChanges();
  }

  getPlazo(plazo:string) {
    return plazo == '1' ? '3 pagos: 5% de interés' : plazo == '2' ? '6 pagos: 7% de interés' : plazo == '3' ? '9 pagos: 12% de interés' : '';
  }

}
