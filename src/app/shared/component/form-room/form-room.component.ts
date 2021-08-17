import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/core/service/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css'],
})
export class FormRoomComponent implements OnInit {
  @Output()
  submitEventEmitter: EventEmitter<Room> = new EventEmitter();

  id: any;
  room: Room = new Room();
  roomForm: FormGroup | any;
  formReadyToShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'] || -1;
    this.loadDataOfRoom();
  }

  loadDataOfRoom() {
    this.roomService.findById(this.id).subscribe({
      next: (result) => {
        this.createForm(result);
        this.formReadyToShow = true;
      },
      error: () => {
        this.createForm(new Room());
        this.formReadyToShow = true;
      },
    });
  }

  onSubmit() {
    this.room = this.roomForm.getRawValue() as Room;
    this.submitEventEmitter.emit(this.room);
  }

  private createForm(room: Room) {
    this.roomForm = this.formBuilder.group({
      name: [room.name],
      date: [room.date],
      startHour: [room.startHour],
      endHour: [room.endHour],
      isActive: [room.isActive],
    });
  }
}
