import {Component, ViewContainerRef} from '@angular/core';

import {ErrorHandler} from '../../services/handle_error.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../services/util.service';
import {DatePipe} from '@angular/common';
import {CustomerDashboardService} from '../../services/customerDashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './customerDashboard.component.html',
  styleUrls: ['./customerDashboard.component.scss']
})
export class CustomerDashboardComponent{


  customer_id ='';
  latitude='';
  longitude='';

  constructor( private errorHandler: ErrorHandler, private toastr: ToastsManager, private modalService: NgbModal, public utilService: UtilService,
              private vcr: ViewContainerRef, private router : Router,
               private datePipe: DatePipe,private customerDashboardService:CustomerDashboardService) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  requestRide(){
    if(this.customer_id==''){
      alert("enter customer id");
    }
    else if(this.latitude=='' || this.longitude=='' ||parseInt(this.longitude)<0||parseInt(this.longitude)>5||parseInt(this.latitude)<0||parseInt(this.latitude)>5){

      alert(parseInt(this.latitude)+','+parseInt(this.longitude)+"Invalid location.Enter latitude and longitude between 1 and 5")
    }

    else {
      let payload = {"requested_by": this.customer_id,
      "latitude":this.latitude,
        "longitude":this.longitude
      }
      this.customerDashboardService.request_ride(payload).subscribe(res => {
         this.errorHandler.success(res.message, this.toastr);
        // alert('sucess')
        // console.log(this.assessment_response.assessment_list)
      }, error => {
        this.errorHandler.handleError(error, this.toastr);
      });
    }
  }


}

