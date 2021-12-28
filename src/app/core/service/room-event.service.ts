import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomEvent } from 'src/app/shared/model/roomEvent';


@Injectable({
  providedIn: 'root',
})
export class RoomEventService {

  baseURL = 'http://localhost:8080/api/v1/events';
  roomURL = 'http://localhost:8080/api/v1/rooms';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<RoomEvent[]> {
    return this.httpClient.get<RoomEvent[]>(this.baseURL);
  }

  findById(id: number): Observable<RoomEvent> {
    return this.httpClient.get<RoomEvent>(this.baseURL + '/' + id);
  }

  findByRoomId(roomId: number): Observable<RoomEvent[]> {
    return this.httpClient.get<RoomEvent[]>(`${this.roomURL}/${roomId}/events`)
  }

  // save(roomEvent: RoomEvent): Observable<RoomEvent> {
  //   return this.httpClient.post<RoomEvent>(this.baseURL, roomEvent);
  // }

  // update(id: number, roomEvent: RoomEvent): Observable<RoomEvent> {
  //   return this.httpClient.put<RoomEvent>(this.baseURL + '/' + id, roomEvent);
  // }

  // deleteById(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.baseURL + '/' + id);
  // }
}
