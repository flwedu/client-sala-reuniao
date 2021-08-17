import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  roomList?: Observable<Room[]>;

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.roomList = this.roomService.listAll();
  }

  handleDeleteRoom(id: any) {
    this.roomService.deleteById(id).subscribe({
      next: () => {
        alert(`Room nº ${id} deleted`);
        this.reloadData();
      },
      error: (error) => console.log(error),
    });
  }
}
