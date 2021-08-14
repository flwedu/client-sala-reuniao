import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  baseURL = 'http://localhost:8080/api/v1/rooms';

  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.baseURL);
  }

  findById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(this.baseURL + id);
  }

  save(room: Room): Observable<Room> {
    return this.httpClient.post<Room>(this.baseURL, room);
  }

  update(id: number, room: Room): Observable<Room> {
    return this.httpClient.put<Room>(this.baseURL + id, room);
  }

  deleteById(id: number): Observable<Room> {
    return this.httpClient.delete<Room>(this.baseURL + id);
  }
}
