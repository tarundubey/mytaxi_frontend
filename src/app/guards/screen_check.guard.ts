import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class ScreenCheckGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const assigned_screens = JSON.parse(localStorage.getItem('user'))['assigned_screens'];
    if (assigned_screens.indexOf(state.url.split('/')[1]) !== -1) {
      return true;
    }

    this.router.navigate(['/forbidden'], { queryParams: {}});
    return false;
  }
}
