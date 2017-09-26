import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
@Injectable()
export class ItemResolver implements Resolve<any> {
   private baseRoute = 'https://node-hnapi.herokuapp.com';
  constructor(private http: Http, private service: CommonService) {}

  resolve(route: ActivatedRouteSnapshot) {
      this.service.setLoader(true);
      const itemId = route.params['id'];
    return Observable.forkJoin(
        this.http.get(`${this.baseRoute}/item/${itemId}`).toPromise().then(res => {
            this.service.setPageName('item');
            this.service.setLoader(false);
            console.log(res.json());
            return res.json();
        })
        .catch(err => {
            this.service.setLoader(false);
            console.log('Error', err);
        })
    );
  }
}
