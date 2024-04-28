import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BroadcastEntry} from '../model/broadcastEntry';
import {RequestResponse} from '../model/requestResponse';
import {BroadcastToDisplay} from '../model/broadcastToDisplay';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private broadcastUrl = 'http://localhost:8083/broadcast';


  constructor(private httpClient: HttpClient) {
  }

  getAllBroadcast(): Observable<BroadcastToDisplay[]> {
    return this.httpClient.get<BroadcastToDisplay[]>(this.broadcastUrl, {headers: {'Content-Type': 'application/json'}})
  }

  addBroadcastEntry(broadcastEntry: BroadcastEntry) {
    return this.httpClient.post<RequestResponse>(this.broadcastUrl, broadcastEntry, {headers: {'Content-Type': 'application/json'}})
  }

  getById(id: number): Observable<BroadcastEntry> {
    return this.httpClient.get<BroadcastEntry>(this.broadcastUrl + '/' + id, {headers: {'Content-Type': 'application/json'}})
  }

}
