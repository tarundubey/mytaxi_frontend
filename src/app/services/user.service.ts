import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
import { URLSearchParams } from '@angular/http';

/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class UserService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  get_users(payload) {
    const headers = this.utilService.getHeader(payload);

    return this.http.get(this.utilService.getDomain() + '/auth/users/', headers)
      .map(res => res.json());
  }

  create_user(payload) {
    return this.http.post(this.utilService.getDomain() + '/auth/users/', payload, this.utilService.getHeader());
  }

  update_user(user_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/auth/users/' + user_id + '/', data, this.utilService.getHeader());
  }

  export_users(payload) {
    const headers = this.utilService.getNoneHeader(payload);
    return this.http.get(this.utilService.getDomain() + '/auth/users/export/', headers);
  }

  import_users(file, role_name) {
    const _formData = new FormData();
    _formData.append('file', file, file.name);
    return this.http.post(this.utilService.getDomain() + '/auth/users/import/?role_name=' + role_name, _formData, this.utilService.getMultipartHeader());
  }

}
