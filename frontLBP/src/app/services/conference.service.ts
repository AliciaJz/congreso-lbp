import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConferenceService {

  constructor(
    private http: Http
  ) { }

  removeItem(item) {
    return this.http.delete('/api/conferences/' + item._id)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  patchItem(item): Observable<any> {
    return this.http.patch('/api/conferences/' + item._id, item)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  fetchItems(): Observable<any> {
    return this.http.get('/api/conferences')
    .map((res: Response) => res.json())
    .map(items => items)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  addItem(item): Observable<any> {
    return this.http.post('/api/conferences', item)
    .map((res: Response) => res.json())
    .map(itemm => item)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }
}
