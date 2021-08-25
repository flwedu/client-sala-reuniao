import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  room: Room;

  id: number;

  roomForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'] || null;
    this.createForm(this.room);
  }

  onSubmit() {
    this.submitEventEmitter.emit(this.roomForm.getRawValue() as Room);
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
