import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/_clases/Usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Solicitud } from 'src/app/_clases/Solicitud';


@Injectable({
  providedIn: 'root'
})
export class CreditFriendsService {

  private url: string = "http://localhost:3000";
  public userData: Usuario;

  constructor(public _http: HttpClient, public afAuth: AngularFireAuth, public db: AngularFireDatabase) { }

  login(email:string) {

    return this.afAuth.auth.signInWithEmailAndPassword(email, '123456');
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  newUser(userData:Usuario) {
    return this._http.post<Usuario>(`${this.url}/cfapi/signup`, userData).pipe(map(res => res));
  }

  nuevaSolicitud(solicitud: Solicitud) {
    return this._http.post<Solicitud>(`${this.url}/cfapi/nueva`, solicitud).pipe(map(res => res));
  }

}
