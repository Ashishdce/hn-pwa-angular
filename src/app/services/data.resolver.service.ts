import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
const DATA_KEY = makeStateKey('data_key');

@Injectable()
export class DataResolver implements Resolve<any> {
  private baseRoute = 'https://node-hnapi.herokuapp.com';
  flag = false;
  constructor(private http: HttpClient, private service: CommonService, private state: TransferState) {}

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
    const keyData = this.state.get(DATA_KEY, null as any);
    if (this.flag || !keyData) {
      return this.http.get(url).toPromise().then(res => {
          this.service.setPageDetails(key, id);
          this.service.setLoader(false);
          if (!this.flag) {
            this.state.set(DATA_KEY, res as any);
            this.flag = true;
          }
          return res;
        })
        .catch(err => {
          this.service.setLoader(false);
          console.log('Error', err);
        });
      } else {
        return new Promise((res, rej) => {
          res(keyData);
        }).then(res => {
          this.service.setPageDetails(key, id);
          this.service.setLoader(false);
          this.state.set(DATA_KEY, null as any);
          return res;
        })
        .catch(err => {
          this.service.setLoader(false);
          console.log(err.message);
      });
    }
  }
}
