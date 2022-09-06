import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { USER } from './user';
import {Observable, throwError, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient : HttpClient) { }

  public getUser(login: string, password: string): Observable<USER> {
    alert(login + "    " + password);
    return this.httpClient.get<USER>(`http://localhost:8089/user/login/${login}&${password}`).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }
 
/**
 * 
 * @param login 
 * @param password 
 */
  public getAllUsers(): Observable<USER[]> {

    return this.httpClient.get<USER[]>(`http://localhost:8089/user/users`).pipe(
      map(data => data.map(data => new USER().deserialize(data)))
    );
  }

  public createAdminAccount(user: USER): Observable<USER> {
    return this.httpClient.post<USER>(`http://localhost:8089/createAdmin/newAdminAccount`, user).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('Erreur dans le service de création du compte administrateur'))
    );
  }

  public createNewAccount(user: USER): Observable<USER> {
    
    return this.httpClient.post<USER>(`http://localhost:8089/createUser/newAccount`, user).pipe(
      map(data => new USER().deserialize(data)),
      catchError(() => throwError('Erreur dans le service de création du compte administrateur'))
    );
  }

  public verifyIsAdminAccountExist() {
    return this.httpClient.get<boolean>("http://localhost:8089/user/admin");
  }


}
