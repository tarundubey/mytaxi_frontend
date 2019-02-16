import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class ExaminationAppearService {
  is_redirected_from_exam:boolean;
  exam_result:{};
  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }
  begin_current_exam(exam_id){
    return this.http.get(this.utilService.getDomain() + '/api/examinations/'+exam_id+'/appear',this.utilService.getHeader())
      .map(res => res.json());
  }
  get_student_exams() {
    return this.http.get(this.utilService.getDomain() + '/api/student/examinations',this.utilService.getHeader())
      .map(res => res.json());
  }
  submit_exam(assessment_id) {
    return this.http.get(this.utilService.getDomain() + '/api/examinations/' + assessment_id + '/evaluate',this.utilService.getHeader());
  }
  update_assesment_question(assesment_question_id, payload) {
    return this.http.put(this.utilService.getDomain() + '/api/questionAssessment/' + assesment_question_id + '/', payload, this.utilService.getHeader());
  }
  set_redirect_from_exam(is_enabled){
    this.is_redirected_from_exam=is_enabled;
  }
  set_exam_result(response){
    this.exam_result=response
  }


}
