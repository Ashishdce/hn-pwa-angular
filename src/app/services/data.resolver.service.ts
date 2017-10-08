import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
@Injectable()
export class DataResolver implements Resolve<any> {
   private baseRoute = 'https://node-hnapi.herokuapp.com';
  constructor(private http: HttpClient, private service: CommonService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    const key = route.data.key;
    let url;
    if (/(newest|news|show|ask|jobs)/.test(key)) {
      url = `${this.baseRoute}/${key}?page=${id}`;
    } else if (key === 'user') {
      url = `${this.baseRoute}/user/${id}`;
    } else if (key === 'item') {
      url = `${this.baseRoute}/item/${id}`;
    }
    this.service.setLoader(true);
    return this.http.get(url).toPromise().then(res => {
        this.service.setPageDetails(key, id);
        this.service.setLoader(false);
        return res;
      })
      .catch(err => {
        this.service.setLoader(false);
        console.log('Error', err);
      });
  }

}
