import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class BatchService {

  constructor(private http : Http, private utilService : UtilService, private router : Router){

  }

  view_batches() {
    return this.http.get(this.utilService.getDomain() + '/api/batches/', this.utilService.getHeader())
      .map(res => res.json());
  }
  create_batch(payload) {
    return this.http.post(this.utilService.getDomain() + '/api/batches/', payload, this.utilService.getHeader());
  }

  update_batch(batch_id: string, data) {
    return this.http.put(this.utilService.getDomain() + '/api/batches/' + batch_id + '/', data, this.utilService.getHeader());
  }

}
