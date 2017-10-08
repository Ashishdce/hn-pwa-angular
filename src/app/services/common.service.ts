import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  public $loader = new Subject<boolean>();
  public $pageDetails = new BehaviorSubject <Object>({});
  public $totalCount = new BehaviorSubject <number>(1);
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
  setPageDetails(name: string, id: string) {
    const obj = {
      name: this.routeToNames[name],
      id: /^\d+$/.test(id) && name !== 'item' ? parseInt(id) : null,
      type: name
    };
    this.$pageDetails.next(obj);
  }
}
