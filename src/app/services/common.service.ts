import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  public $loader = new Subject<any>();

  setLoader(val: boolean) {
      this.$loader.next(val);
  }
}
