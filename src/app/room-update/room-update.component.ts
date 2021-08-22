import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css'],
})
export class RoomUpdateComponent implements OnInit {
  submitted = false;
  idFromRouter: number;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idFromRouter = this.activedRoute.snapshot.params['id'];
  }

  updateRoom(roomToSave: Room) {
    this.roomService.update(this.idFromRouter, roomToSave).subscribe({
      next: (savedRoom) => {
        console.log(roomToSave);
        console.log(savedRoom);
        this.submitted = true;
      },
      error: (err) => console.error(err),
    });

    this.goToList();
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
