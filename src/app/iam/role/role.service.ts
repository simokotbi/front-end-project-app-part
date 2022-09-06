import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Role } from './role';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  constructor(private httpClient : HttpClient) { }

  public getAllRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`http://localhost:8089/role/roles`).pipe(
      map(data => data.map(data => new Role().deserialize(data)))
    );
  }

  public createNewRole(role: Role): Observable<Role> {
    return this.httpClient.post<Role>(`http://localhost:8089/createRole/newRole`, role).pipe(
      map(data => new Role().deserialize(data)),
      catchError(() => throwError('Erreur dans le service de création des roles'))
    );
  }
}
