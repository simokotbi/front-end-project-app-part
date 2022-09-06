import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { USER } from '../user/user';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  public getUser(login: string, password: string): Observable<USER> {
    
    return this.httpClient.get<USER>(`http://localhost:8089/singIn/login/${login}&${password}`).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }
}
