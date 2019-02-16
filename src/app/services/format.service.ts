import {Injectable} from '@angular/core';


@Injectable()
export class FormatService{



   removeUnderscore(text) {
    return text.replace('_',' ');
  }
}
