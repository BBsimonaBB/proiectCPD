import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credentials} from '../model/credentials';
import {RequestResponse} from '../model/requestResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8083';

  constructor(private httpClient: HttpClient) {
  }

  login(credentials: Credentials): Observable<RequestResponse> {
    let loginUrl = this.apiUrl + '/auth/login';
    return this.httpClient.post<RequestResponse>(loginUrl, credentials, {headers: {'Content-Type': 'application/json'}})
  }
}
