import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:8083';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/user', {headers: {'Content-Type': 'application/json'}});
  }
}
