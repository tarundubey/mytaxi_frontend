 import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';



export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './admin/admin.module#AdminModule'
  }],
  // canActivate: [AuthGuard]
}, {
  path: 'auth',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
  // canActivate: [LoginGuard]
}, 
{
  path: 'logout',
  redirectTo : 'auth'
  
},
{
  path: '**',
  redirectTo: 'error/404'
}];

