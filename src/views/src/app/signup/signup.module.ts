import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from 'src/app/signup/signup.component';
import { SharedModule } from '../_app-modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
