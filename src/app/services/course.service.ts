import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class CourseService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_courses() {
    return this.http.get(this.utilService.getDomain() + '/api/courses/',this.utilService.getHeader())
      .map(res => res.json());
  }
  create_course(payload) {
    return this.http.post(this.utilService.getDomain() + '/api/courses/', payload, this.utilService.getHeader());
  }

  update_course(course_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/courses/' + course_id + '/', data, this.utilService.getHeader());
  }

}
