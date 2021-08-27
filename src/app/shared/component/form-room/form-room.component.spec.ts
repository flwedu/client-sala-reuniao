import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { Room } from '../../model/room';

import { FormRoomComponent } from './form-room.component';

describe('FormRoomComponent', () => {
  let component: FormRoomComponent;
  let fixture: ComponentFixture<FormRoomComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, ReactiveFormsModule],
      declarations: [FormRoomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRoomComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.room = new Room();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form filled incorrectly should be invalid', async () => {
    component.roomForm.controls['name'].setValue('Room 01');
    component.roomForm.controls['date'].setValue('12:04');
    component.roomForm.controls['startHour'].setValue('12:04');
    component.roomForm.controls['endHour'].setValue('12:04');

    expect(component.roomForm.valid).toBeFalsy();
  })

  it('empty form should be invalid', async () => {
    component.roomForm.controls['name'].setValue('');
    component.roomForm.controls['date'].setValue('');
    component.roomForm.controls['startHour'].setValue('');
    component.roomForm.controls['endHour'].setValue('');

    expect(component.roomForm.valid).toBeFalsy();
  })

  it('save button should be disabled if the form is invalid', async () => {
    component.roomForm.controls['name'].setValue('');
    component.roomForm.controls['date'].setValue('');
    component.roomForm.controls['startHour'].setValue('');
    component.roomForm.controls['endHour'].setValue('');

    const el: HTMLButtonElement = debugEl.query(By.css('#button-save')).nativeElement;
    expect(el.disabled).toBeTruthy();
  })

  it('form filled correctly should be valid', async () => {
    component.roomForm.controls['name'].setValue('Room 01');
    component.roomForm.controls['date'].setValue('01/01/2021');
    component.roomForm.controls['startHour'].setValue('12:00');
    component.roomForm.controls['endHour'].setValue('14:00');

    expect(component.roomForm.valid).toBeTruthy();
  })
});
