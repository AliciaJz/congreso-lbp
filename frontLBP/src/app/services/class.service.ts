import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClassService {
  baseURL = 'http://localhost:3000';
  constructor(
    private http: Http
  ) { }

  removeItem(item) {
    return this.http.delete(`${this.baseURL}/api/classes/` + item._id)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  patchItem(item): Observable<any> {
    return this.http.patch(`${this.baseURL}/api/classes/` + item._id, item)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  fetchItems(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/classes`)
    .map((res: Response) => res.json())
    .map(items => items)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  // fetchItem(item): Observable<any> {
  //   return this.http.get(`${this.baseURL}/api/classes` + item._id, item)
  //   .map((res: Response) => res.json())
  //   .map(itemm => item)
  //   .catch(e => {
  //     console.log(e);
  //     return Observable.throw(e);
  //   });
  // }

  addItem(item): Observable<any> {
    return this.http.post(`${this.baseURL}/api/classes`, item)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }
}
