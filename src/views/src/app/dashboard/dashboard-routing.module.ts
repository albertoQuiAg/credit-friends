import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RouterGuardService } from 'src/app/_services/router-guard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ RouterGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
