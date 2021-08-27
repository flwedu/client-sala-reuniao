import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { RoomService } from '../core/service/room.service';

import { RoomUpdateComponent } from './room-update.component';

describe('RoomUpdateComponent', () => {
  let component: RoomUpdateComponent;
  let fixture: ComponentFixture<RoomUpdateComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [RoomUpdateComponent],
      providers: [RoomService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
