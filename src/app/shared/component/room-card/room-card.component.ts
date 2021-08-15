import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/core/service/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css'],
})
export class RoomCardComponent implements OnInit {
  @Input()
  roomBeingShown!: Room;

  constructor(private router: Router, private roomService: RoomService) {}

  ngOnInit(): void {}

  goToRoomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  goToRoomUpdate(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteRoomById(id: number) {
    this.roomService.deleteById(id).subscribe({
      next: (deletedRoom) => {
        alert(`Room ${deletedRoom.id} deleted!!`);
      },
      error: (err) => console.log(err),
    });
  }
}
