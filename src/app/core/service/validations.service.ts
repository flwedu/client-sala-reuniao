import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string) {
    let messages;

    messages = {
      required: 'Required field',
      invalidHour: 'Hour must be in the right format (hh:mm)',
      invalidDate: 'Date must be in the right format (dd/MM/yyyy)',
    };

    return messages[validatorName];
  }

  static hourPatternValidator(control: AbstractControl) {

    if (!control.value) {
      return null;
    }
    const regex = new RegExp('([0-1][0-9]|2[0-3]):[0-5][0-9]');
    return regex.test(control.value) ? null : { invalidHour: true };

  }

  static datePatternValidator(control: AbstractControl) {

    if (!control.value) {
      return null;
    }
    const regex = new RegExp('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$');
    return regex.test(control.value) ? null : { invalidDate: true };

  }
}
