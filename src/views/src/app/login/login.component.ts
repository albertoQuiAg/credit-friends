import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreditFriendsService } from '../_services/credit-friends.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitButton: boolean = false;

  constructor(private _router: Router, public form: FormBuilder, public _cfService: CreditFriendsService) {

    this.loginForm = this.form.group({
      "email" : ["", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });

   }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.valid) {

      this.submitButton = true;

      this._cfService.login(this.loginForm.controls['email'].value).then((userData) => {
        setTimeout(() => {
          this.submitButton = false;
        }, 2000);
        this._router.navigate(['/dashboard']);
      }, (err) => {
        this.submitButton = false;
        this.loginForm.controls['email'].setErrors({sesion : 'upss'});
      });
    }
  }

  getErrorMessage(control:string) {
    return this.loginForm.controls[control].hasError('required') ? 'Este campo es necesario.' : 
            this.loginForm.controls[control].hasError('pattern') ? 'Ingrese un e-mail válido.' : 
            this.loginForm.controls[control].hasError('sesion') ? 'El usuario no existe.' : '';
  }

}
