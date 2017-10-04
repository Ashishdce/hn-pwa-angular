import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
@Injectable()
export class ContentResolver implements Resolve<any> {
   private baseRoute = 'https://node-hnapi.herokuapp.com';
  constructor(private http: HttpClient, private service: CommonService) {}

  resolve(route: ActivatedRouteSnapshot) {
      this.service.setLoader(true);
      const pageNum = route.params['id'];
      const key = route.data.key;
    return Observable.forkJoin(
        this.http.get(`${this.baseRoute}/${key}?page=${pageNum}`).toPromise().then(res => {
            this.service.setPageName(key, pageNum);
            this.service.setLoader(false);
            return res;
        })
        .catch(err => {
            this.service.setLoader(false);
            console.log('Error', err);
        })
    ).map(res => {
        return {
            data: res[0],
            id: pageNum
        };
    });
  }
}
