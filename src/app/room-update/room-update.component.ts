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
  ) {
    this.idFromRouter = this.activedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {}

  updateRoom(roomToSave: Room) {
    this.roomService.update(this.idFromRouter, roomToSave).subscribe({
      next: () => (this.submitted = true),
      error: (err) => console.error(err),
    });

    this.goToList();
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
