import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/service/room.service';
import { ValidationsService } from 'src/app/core/service/validations.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css'],
})
export class FormRoomComponent implements OnInit {
  @Output()
  submitEventEmitter: EventEmitter<Room> = new EventEmitter();

  id: number;
  room: Room = new Room();
  roomForm: FormGroup;
  formReadyToShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private activedRoute: ActivatedRoute
  ) { }

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

  getFormControl(controlName: string) {
    return this.roomForm.get(controlName);
  }

  private createForm(room: Room) {
    this.roomForm = this.formBuilder.group({
      name: [room.name, [Validators.required, Validators.minLength(2)]],
      date: [
        room.date,
        [
          Validators.required,
          ValidationsService.datePatternValidator,
        ],
      ],
      startHour: [
        room.startHour,
        [
          Validators.required,
          ValidationsService.hourPatternValidator,
        ],
      ],
      endHour: [
        room.endHour,
        [
          Validators.required,
          ValidationsService.hourPatternValidator,
        ],
      ],
      isActive: [room.isActive],
    });
  }
}
