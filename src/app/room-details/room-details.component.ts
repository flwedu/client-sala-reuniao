import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  id: any;
  room: Room;

  constructor(
    private roomService: RoomService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    this.loadData(this.id);
  }

  loadData(id: any) {
    this.roomService.findById(id).subscribe({
      next: (result) => {
        this.room = result;
      },
      error: (err) => console.error(err),
    });
  }

  goToList() {
    this.router.navigate(['list']);
  }

  goToUpdate() {
    this.router.navigate(['update', this.id]);
  }
}
