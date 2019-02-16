import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class ExaminationService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_exams() {
    return this.http.get(this.utilService.getDomain() + '/api/examinations/',this.utilService.getHeader())
      .map(res => res.json());
  }
  create_exam(payload) {
    return this.http.post(this.utilService.getDomain() + '/api/examinations/', payload, this.utilService.getHeader());
  }

  update_exam(examination_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/examinations/' + examination_id+ '/', data, this.utilService.getHeader());
  }
  delete_exam(examination_id){
    return this.http.delete(this.utilService.getDomain() + '/api/examinations/' + examination_id+ '/', this.utilService.getHeader());
  }

}
