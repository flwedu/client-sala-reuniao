import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  roomList: Room[] = [];

  constructor(
    private roomService: RoomService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.roomService
      .listAll()
      .subscribe({
        next: (results) => (this.roomList = [...results]),
        error: (err) => console.error(err),
      });
  }
}
