import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-room-error-message',
  template: ` <div *ngIf="errorMessage !== null">{{ errorMessage }}</div> `,
  styleUrls: ['./form-room-error-message.component.css'],
})
export class FormRoomErrorMessageComponent {
  @Input()
  control!: AbstractControl | null;

  constructor() {}

  get errorMessage(): any {
    if (this.control?.errors) {
      for (let propertyName in this.control.errors) {
        if (
          this.control.touched &&
          this.control.errors.hasOwnProperty(propertyName)
        ) {
          console.log(this.control.errors[propertyName]);
          return this.control.errors[propertyName];
        }
      }
    }

    return null;
  }
}
