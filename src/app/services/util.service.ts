import {Injectable, isDevMode} from '@angular/core';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class UtilService {

  constructor() {

  }


  getToken() {
    return 'JWT ' + localStorage.getItem('token');
  }

  getHeader(payload = null) {
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      })
    };

    if(payload) {
      const params = new URLSearchParams();
      Object.keys(payload).forEach(function (key) {
        params.set(key, payload[key]);
      });
      httpOptions['params'] = params;
    }
    const options = new RequestOptions(httpOptions);
    return options;
  }


  getNoneHeader(payload = null) {
    const httpOptions = {
      headers: new Headers({
        'Content-Type': undefined,
        'Authorization': this.getToken()
      })
    };

    if(payload) {
      const params = new URLSearchParams();
      Object.keys(payload).forEach(function (key) {
        params.set(key, payload[key]);
      });
      httpOptions['params'] = params;
    }
    const options = new RequestOptions(httpOptions);
    return options;
  }


  getMultipartHeader(payload = null) {
    const httpOptions = {
      headers: new Headers({
        'enctype': 'multipart/form-data',
        'Authorization': this.getToken()
      })
    };

    if (payload) {
      const params = new URLSearchParams();
      Object.keys(payload).forEach(function (key) {
        params.set(key, payload[key]);
      });
      httpOptions['params'] = params;
    }
    const options = new RequestOptions(httpOptions);
    return options;
  }


  getTaxiDomain(){
    const apiDomain = 'http://localhost:7000';
    return apiDomain;
  }

  isMobile() {
    return window.innerWidth < 768;
  }

  get_active_status(is_active) {
    if (is_active) {
      return '<span class="badge badge-success">Active</span>';
    } else {
      return '<span class="badge badge-danger">In Active</span>';
    }
  }

  parseDate(date_string) {
    console.log(date_string);
    if (!date_string) {
      return undefined;
    }
    return new Date(date_string);
  }
}
