import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class DashboardService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_dashboard() {
    return this.http.get(this.utilService.getDomain() + '/api/dashboard/',this.utilService.getHeader())
      .map(res => res.json());
  }
}
