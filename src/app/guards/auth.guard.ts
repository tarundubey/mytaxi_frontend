import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../services/login.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService : LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('user'),"user")
       return true;
     }
     else {
       this.loginService.logout();
       this.router.navigate(['/auth'], { queryParams: {}});
       return false;
     }
  }
}
