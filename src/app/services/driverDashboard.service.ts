import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';


@Injectable()
export class DriverDashboardService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }
  acceptRide(payload,request_id) {
    return this.http.put(this.utilService.getTaxiDomain() + '/api/request/'+request_id+'/accept/',payload,this.utilService.getHeader())
      .map(res => res.json());
  }
  finishRide(payload,request_id) {
    return this.http.put(this.utilService.getTaxiDomain() + '/api/request/'+request_id+'/complete/',payload,this.utilService.getHeader())
      .map(res => res.json());
  }
  getAvailableRides(payload,driver_id){
    return this.http.post(this.utilService.getTaxiDomain() + '/api/dashboard/'+driver_id+'/',payload,this.utilService.getHeader())
    .map(res => res.json());
  }
}
