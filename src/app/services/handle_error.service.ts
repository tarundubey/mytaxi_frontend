import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {LoginService} from './login.service';


@Injectable()
export class ErrorHandler {

  constructor(private loginService : LoginService){

  }


  handleError(error : any, toastr: ToastsManager){
    try {
      if (error.status === 401){
        this.loginService.logout();
        return;
      }
      toastr.error(error.json()['error'], 'Error', {positionClass: 'toast-bottom-right '});

    } catch (e){
      toastr.error('No Internet Connection', 'Connection Problem', {positionClass : 'toast-bottom-right '});
    }
  }


  show(error : string, toastr: ToastsManager){
    toastr.error(error , 'Error' , {positionClass : 'toast-bottom-right '});
  }

  success(message : string, toastr: ToastsManager){
    toastr.success(message , 'Success' , {positionClass : 'toast-bottom-right '});
  }
}
