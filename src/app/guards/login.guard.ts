import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private loginService : LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // if (!localStorage.getItem('token')) {
    //   return true;
    // }
    //
    // this.router.navigate(['/'], { queryParams: {}});
    // return false;
  }
}
