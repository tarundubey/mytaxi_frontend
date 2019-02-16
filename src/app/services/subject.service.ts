import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class SubjectService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_subjects() {
    return this.http.get(this.utilService.getDomain() + '/api/subjects/',this.utilService.getHeader())
      .map(res => res.json());
  }
  create_subject(payload) {
    return this.http.post(this.utilService.getDomain() + '/api/subjects/', payload, this.utilService.getHeader());
  }

  update_subject(subject_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/subjects/' + subject_id + '/', data, this.utilService.getHeader());
  }

}
