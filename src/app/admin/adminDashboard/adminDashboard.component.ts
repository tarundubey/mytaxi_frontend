import {Component, ViewContainerRef} from '@angular/core';

import {ErrorHandler} from '../../services/handle_error.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from '../../services/util.service';
import {DatePipe} from '@angular/common';
import {AdminDashboardService} from '../../services/adminDashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './adminDashboard.component.html',
  styleUrls: ['./adminDashboard.component.scss']
})
export class AdminDashboardComponent{


  dashboard_response = {  };

  constructor( private errorHandler: ErrorHandler, private toastr: ToastsManager, private modalService: NgbModal, public utilService: UtilService,
              private vcr: ViewContainerRef, private router : Router,
               private datePipe: DatePipe,private adminDashboardService:AdminDashboardService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.loadRequests();
  }
  loadRequests(){
    let payload={};
    this.adminDashboardService.view_dashboard(payload).subscribe(res => {
      this.dashboard_response = res;
      console.log(this.dashboard_response);
    }, error => {
      this.errorHandler.handleError(error, this.toastr);
    });
  }
}

