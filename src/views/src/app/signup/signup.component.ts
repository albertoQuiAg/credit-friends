import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CreditFriendsService } from '../_services/credit-friends.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public submitButton: boolean = false;

  constructor(private _router: Router, public form: FormBuilder, private snackBar: MatSnackBar, public _cfService: CreditFriendsService) {

    this.signupForm = this.form.group({
      "nombre" : ["", Validators.required],
      "email" : ["", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]    });

   }

  ngOnInit() {
  }

  getErrorMessage(control:string) {
    return this.signupForm.controls[control].hasError('required') ? 'Este campo es necesario.' : 
      this.signupForm.controls[control].hasError('pattern') ? 'Ingrese un e-mail válido.' : 
      this.signupForm.controls[control].hasError('emailErr') ? 'El correo ya existe' : '';
  }

  onSignup() {
    if (this.signupForm.valid) {

      this.submitButton = true;

      this._cfService.newUser(this.signupForm.value).subscribe((user) => {

        this.submitButton = false;

        if (user.error) {
          this.signupForm.controls['email'].setErrors({emailErr : 'upss'});
        } else {

          this.snackBar.open('Usuario creado con éxito', 'OK', {
            duration: 3600,
          });
    
          this._router.navigate(['/login']);

        }
        
      });
    }
  }

}
