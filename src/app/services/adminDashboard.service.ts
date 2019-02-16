import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';


@Injectable()
export class AdminDashboardService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }
  view_dashboard(payload) {
    return this.http.post(this.utilService.getTaxiDomain() + '/api/dashboard/',payload,this.utilService.getHeader())
      .map(res => res.json());
  }
}
