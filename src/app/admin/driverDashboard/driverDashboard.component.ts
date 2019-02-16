import {Component, ViewContainerRef} from '@angular/core';

import {ErrorHandler} from '../../services/handle_error.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../services/util.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AdminDashboardService} from '../../services/adminDashboard.service';
import {DriverDashboardService} from '../../services/driverDashboard.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './driverDashboard.component.html',
  styleUrls: ['./driverDashboard.component.scss']
})
export class DriverDashboardComponent{


  pending_rides = {  };
  completed_rides = {  };
  ongoing_rides = {  };
  accept_response={};
  finished_response={};
  driver_id:string;

  constructor( private errorHandler: ErrorHandler, private toastr: ToastsManager, private modalService: NgbModal, public utilService: UtilService,
              private vcr: ViewContainerRef, private router : Router,private route:ActivatedRoute,
               private datePipe: DatePipe,private driverDashboardService:DriverDashboardService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.route.queryParams.subscribe(params => {
      this.driver_id = params['id'];
    });
    // this.loadPendingRides();
 this.loadAll();
  }
  loadAll(){
    this.loadPendingRides();
    this.loadCompletedRides();
    this.loadOngoingRides();
  }
  loadPendingRides(){
    let payload={'status':'pending'};
    this.driverDashboardService.getAvailableRides(payload,this.driver_id).subscribe(res => {
      this.pending_rides = res;
      console.log(this.pending_rides);
    }, error => {
      this.errorHandler.handleError(error, this.toastr);
    });
  }
  loadCompletedRides(){
    let payload={'status':'finished'};
    this.driverDashboardService.getAvailableRides(payload,this.driver_id).subscribe(res => {
      this.completed_rides = res;
      console.log(this.completed_rides);
    }, error => {
      this.errorHandler.handleError(error, this.toastr);
    });
  }
  loadOngoingRides(){
    let payload={'status':'ongoing'};
    this.driverDashboardService.getAvailableRides(payload,this.driver_id).subscribe(res => {
      this.ongoing_rides = res;
      console.log(this.ongoing_rides);
    }, error => {
      this.errorHandler.handleError(error, this.toastr);
    });

  }
  acceptRide(request_id){
   let payload={'acceptor':this.driver_id}
    this.driverDashboardService.acceptRide(payload,request_id).subscribe(res => {
      this.accept_response = res;
      console.log(this.accept_response);
      this.loadAll()
      setTimeout(() => {
        this.finishRide(request_id);
      }, 100);
    }, error => {
      this.errorHandler.handleError(error, this.toastr);
      setTimeout(() => {
        this.loadAll()
        this.finishRide(request_id);
      }, 300000);
    });
  }
  finishRide(request_id){
    let payload={'acceptor':this.driver_id}
    this.driverDashboardService.finishRide(payload,request_id).subscribe(res => {
      this.finished_response = res;
      console.log(this.finished_response);
      this.loadAll()

    }, error => {
      this.errorHandler.handleError(error, this.toastr);
      this.loadAll()

    });
  }
  requestRide(){
    alert('hi');
  }
}

