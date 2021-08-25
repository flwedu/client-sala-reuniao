import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationsService } from 'src/app/core/service/validations.service';

@Component({
  selector: 'app-form-room-error-message',
  template: ` <div *ngIf="errorMessage !== null">{{ errorMessage }}</div> `,
  styleUrls: ['./form-room-error-message.component.css'],
})
export class FormRoomErrorMessageComponent {

  @Input() control: AbstractControl;

  constructor() { }

  get errorMessage(): string {

    for (let propertyName in this.control.errors) {
      if (
        this.control.touched &&
        this.control.errors.hasOwnProperty(propertyName)
      ) {
        return ValidationsService.getValidatorErrorMessage(propertyName)
      }
    }

    return null;
  }
}
