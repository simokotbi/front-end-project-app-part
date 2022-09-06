import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Profile } from './profile';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private httpClient : HttpClient) { }

  public getAllProfiles(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(`http://localhost:8089/profile/profiles`).pipe(
      map(data => data.map(data => new Profile().deserialize(data)))
    );
  }

  public createNewProfile(profile: Profile): Observable<Profile> {
    return this.httpClient.post<Profile>(`http://localhost:8089/createProfile/newProfile`, profile).pipe(
      map(data => new Profile().deserialize(data)),
      catchError(() => throwError('Erreur dans le service de création des profiils'))
    );
  }
}
