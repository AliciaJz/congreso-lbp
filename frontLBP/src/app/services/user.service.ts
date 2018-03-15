import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  fetchUser(): Observable<any> {
    return this.http.get('http://localhost:3000/api/users')
    .map((res: Response) => res.json())
    .map(user => user)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  addUser(user): Observable<any> {
    return this.http.get('http://localhost:3000/api/users', user)
    .map((res: Response) => res.json())
    .map(userrr => user)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
  });
}
}
