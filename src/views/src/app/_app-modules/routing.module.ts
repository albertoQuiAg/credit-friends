import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'login', loadChildren: 'src/app/login/login.module#LoginModule' },
    { path: 'dashboard', loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule' },
    { path: 'signup', loadChildren: 'src/app/signup/signup.module#SignupModule' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadChildren: 'src/app/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [ ]
})

export class RoutingModule { }