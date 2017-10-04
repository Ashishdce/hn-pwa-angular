import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
@Injectable()
export class UserResolver implements Resolve<any> {
   private baseRoute = 'https://node-hnapi.herokuapp.com';
  constructor(private http: HttpClient, private service: CommonService) {}

  resolve(route: ActivatedRouteSnapshot) {
      this.service.setLoader(true);
      const itemId = route.params['id'];
    return Observable.forkJoin(
        this.http.get(`${this.baseRoute}/user/${itemId}`).toPromise().then(res => {
            this.service.setPageName('user');
            this.service.setLoader(false);
            return res;
        })
        .catch(err => {
            this.service.setLoader(false);
            console.log('Error', err);
        })
    );
  }
}
