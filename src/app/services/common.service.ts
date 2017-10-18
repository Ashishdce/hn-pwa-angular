import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  public $loader = new BehaviorSubject<boolean>(false);
  public $pageDetails = new BehaviorSubject <Object>({});
  public $routeData = new BehaviorSubject <Object>({});
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
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.$routeData.next(Object.assign({}, this.$routeData.getValue(), route.snapshot.firstChild.data));
      }
    });
  }
  setLoader(val: boolean) {
      this.$loader.next(val);
  }
  setPageDetails(name: string, id: string) {
    const obj = {
     // name: this.routeToNames[name],
      id: /^\d+$/.test(id) && name !== 'item' ? parseInt(id) : null,
      type: name
    };
    this.$routeData.next(Object.assign({}, this.route.snapshot.data, obj));
    this.$pageDetails.next(obj);
  }
}
