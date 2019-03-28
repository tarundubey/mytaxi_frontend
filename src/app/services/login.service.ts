import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
import { AuthGuard } from 'app/guards/auth.guard';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class LoginService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  } 

  login(username: string, password: string) {
    localStorage.removeItem('token');
    return this.http.post(this.utilService.getDomain() + '/auth/login/', {username : username, password : password}).map(res => res.json());
  }


  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
