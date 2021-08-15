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
  room: Room = new Room();
  submitted = false;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData(this.getIdFromRoute());
  }

  onSubmit() {
    this.updateRoom();
  }

  loadData(id: number) {
    this.roomService.findById(id).subscribe({
      next: (getRoom) => (this.room = getRoom),
      error: (err) => console.error(err),
    });
  }

  updateRoom() {
    this.roomService
      .update(this.getIdFromRoute(), this.room)
      .subscribe({
        next: () => (this.submitted = true),
        error: (err) => console.error(err),
      });

    this.goToList();
  }

  getIdFromRoute(): number {
    return this.activedRoute.snapshot.params['id'];
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
