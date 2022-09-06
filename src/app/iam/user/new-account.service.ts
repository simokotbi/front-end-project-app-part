import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { USER } from './user';
@Injectable({
  providedIn: 'root'
})
export class NewAccountService {

  constructor(private httpClient : HttpClient) { }

  public createUserAccount(login: string, password: string): Observable<USER> {
    alert(login + "    " + password);
    return this.httpClient.get<USER>(`http://localhost:8089/user/login/${login}&${password}`).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }

  public createAdminAccount(login: string, password: string): Observable<USER> {
    alert(login + "    " + password);
    return this.httpClient.get<USER>(`http://localhost:8089/user/login/${login}&${password}`).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }
}
