import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css'],
})
export class RoomUpdateComponent implements OnInit {

  room: Room;
  submitted = false;
  idFromRouter: number;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idFromRouter = this.activedRoute.snapshot.params['id'];
    this.getDataOfRoom(this.idFromRouter);
  }

  updateRoom(roomToSave: Room) {
    this.roomService.update(this.idFromRouter, roomToSave).subscribe({
      next: () => {
        this.submitted = true;
      },
      error: (err) => console.error(err),
    });

    this.goToList();
  }

  getDataOfRoom(id: number) {
    this.roomService.findById(id).subscribe({
      next: (roomResponse) => { this.room = roomResponse },
      error: (err) => {
        console.error(err)
        this.router.navigate(['404'])
      }
    })
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
