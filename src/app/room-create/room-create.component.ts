import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css'],
})
export class RoomCreateComponent implements OnInit {
  room = new Room();
  submitted = false;

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.newRoom();
  }

  newRoom() {
    this.room = new Room();
    this.submitted = false;
  }

  saveRoom() {
    this.roomService.save(this.room).subscribe({
      next: () => {
        this.submitted = true;
      },
      error: (err) => {
        alert('Houve um erro ao tentar salvar a sala');
        console.error(err);
      },
    });
  }

  onSubmit() {
    this.saveRoom();
  }

  gotoListPage() {
    this.router.navigate(['/list']);
  }
}
