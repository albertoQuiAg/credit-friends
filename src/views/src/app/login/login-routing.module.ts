import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterGuardService } from 'src/app/_services/router-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [ RouterGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
