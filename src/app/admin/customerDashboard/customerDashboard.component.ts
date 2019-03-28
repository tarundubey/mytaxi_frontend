import {Component, ViewContainerRef} from '@angular/core';
import {Http} from '@angular/http';
import {ErrorHandler} from '../../services/handle_error.service';
import {ToastsManager} from 'ng2-toastr';
import {UtilService} from '../../services/util.service';
import {CustomerDashboardService} from '../../services/customerDashboard.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ViewChild, ElementRef, } from '@angular/core';
import {AdminDashboardService} from '../../services/adminDashboard.service';

declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './customerDashboard.component.html',
  styleUrls: ['./customerDashboard.component.scss'],
  styles: ['agm-map { height: 300px; /* height is required */ }'],


})

export class CustomerDashboardComponent{
  customer_id ='';
  latitud = '';
  longitud = '';
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  latitude = -28.68352;
  longitude = -147.20785;
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(private http : Http, private errorHandler: ErrorHandler, private toastr: ToastsManager, public utilService: UtilService,
    vcr: ViewContainerRef, private customerDashboardService:CustomerDashboardService ,private adminDashboardService:AdminDashboardService) {
this.toastr.setRootViewContainerRef(vcr);
this.loadRequests();

}
////will update token verification unitl this working
loadRequests(){
  let payload={};
  this.http.post(this.utilService.getTaxiDomain() + '/api/dashboard/',payload,this.utilService.getHeader()).subscribe(res => {
    console.log();
  }, error => {
    this.errorHandler.handleError(error, this.toastr);
  });
}

  public handleAddressChange(address) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.lng = address.geometry.location.lng();
    this.lat  = address.geometry.location.lat();
}
 
findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitud = position.coords.latitude.toString() ;
      this.lat = position.coords.latitude ;
      this.lng = position.coords.longitude;
      this.longitud = position.coords.longitude.toString()
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
  requestRide(){
    if(this.customer_id==''){
      alert("enter customer id");
    }

    else {
      let payload = {"requested_by": this.customer_id,
      "latitude":this.latitud,
        "longitude":this.longitud
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
  
  if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        console.log(this.lng,this.lat)
      });
    }
  


}

// just an interface for type safety.

