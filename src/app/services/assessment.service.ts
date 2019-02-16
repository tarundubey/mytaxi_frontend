import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class AssessmentService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  get_assessments() {
    return this.http.get(this.utilService.getDomain() + '/api/assessments/', this.utilService.getHeader())
      .map(res => res.json());
  }
  get_exam_assessments(examination_id) {
    return this.http.get(this.utilService.getDomain() + '/api/examination/'+examination_id+'/assessments', this.utilService.getHeader())
      .map(res => res.json());  }

  update_exam_assessment(assessment_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/assessments/' + assessment_id + '/', data, this.utilService.getHeader());
  }

}
