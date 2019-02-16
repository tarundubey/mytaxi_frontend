import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class ExaminationDetailService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_exam(exam_id) {
    return this.http.get(this.utilService.getDomain() + '/api/examinations/'+exam_id+'/details',this.utilService.getHeader())
      .map(res => res.json());
  }
  create_question(payload) {
    return this.http.post(this.utilService.getDomain() + '/api/questions/', payload, this.utilService.getHeader());
  }

  update_question(question_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/questions/' + question_id+ '/', data, this.utilService.getHeader());
  }

}
