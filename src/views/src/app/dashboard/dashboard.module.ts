import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SharedModule } from '../_app-modules/shared.module';
import { NuevaSolicitudComponent } from '../_dialogs/nueva-solicitud/nueva-solicitud.component';
import { TimerDirective } from '../_directives/timer.directive';
import { PerfilComponent } from 'src/app/_dialogs/perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    NuevaSolicitudComponent,
    PerfilComponent,
    TimerDirective
  ],
  entryComponents: [
    NuevaSolicitudComponent,
    PerfilComponent
  ]
})
export class DashboardModule { }
