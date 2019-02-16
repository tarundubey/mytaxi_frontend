import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';


@Injectable()
export class CustomerDashboardService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }
  request_ride(payload) {
    return this.http.post(this.utilService.getTaxiDomain() + '/api/request/',payload,this.utilService.getHeader())
      .map(res => res.json());
  }
}
