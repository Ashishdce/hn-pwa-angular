import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  public $loader = new Subject<boolean>();
  public $pageDetails = new Subject<Object>();
  public $totalCount = new Subject<number>();
  public routeToNames = {
    'newest': 'Top Stories',
    'news': 'News',
    'show': 'Shows',
    'ask': 'Asks',
    'jobs': 'Jobs',
    'user': 'User Information',
    'item': 'Comments'
  };
  setLoader(val: boolean) {
      this.$loader.next(val);
  }
  setPageName(name: string, pageNumber?) {
    const obj = {
      name: this.routeToNames[name],
      pageNumber: pageNumber,
      type: name
    };
    this.$pageDetails.next(obj);
  }
}
