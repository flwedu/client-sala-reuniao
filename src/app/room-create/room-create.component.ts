import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../core/service/room.service';
import { Room } from '../shared/model/room';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css'],
})
export class RoomCreateComponent implements OnInit {
  submitted = false;

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.newRoom();
  }

  newRoom() {
    this.submitted = false;
  }

  saveRoom(room: Room) {
    this.roomService.save(room).subscribe({
      next: () => {
        this.submitted = true;
      },
      error: (err) => {
        alert('Houve um erro ao tentar salvar a sala');
        console.error(err);
      },
    });
  }

  createNewRoom() {
    return new Room();
  }

  gotoListPage() {
    this.router.navigate(['/list']);
  }
}
