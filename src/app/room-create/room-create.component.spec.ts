import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { RoomService } from '../core/service/room.service';
import { FooterComponent } from '../shared/component/footer/footer.component';
import { FormRoomComponent } from '../shared/component/form-room/form-room.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { RoomCreateComponent } from './room-create.component';


describe('RoomCreateComponent', () => {

  let component: RoomCreateComponent;
  let fixture: ComponentFixture<RoomCreateComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        RoomCreateComponent,
        FormRoomComponent,
      ],
      providers: [RoomService]
    })
      .compileComponents().then(() => {

        fixture = TestBed.createComponent(RoomCreateComponent)
        component = fixture.componentInstance;
      });
  })

  it('should create the component', async () => {

    expect(component).toBeTruthy();
  })

  it('should call gotoListPage() when button clicked', () => {

    fixture.detectChanges();
    spyOn(component, 'gotoListPage')

    const debugEl = fixture.debugElement;

    el = debugEl.query(By.css('#button-goto-list')).nativeElement;
    el.click();

    expect(component.gotoListPage).toHaveBeenCalled();

  })

  it('should call newRoom() method when button clicked', () => {

    fixture.detectChanges();
    spyOn(component, 'newRoom')

    debugEl = fixture.debugElement;

    el = debugEl.query(By.css('#button-new-room')).nativeElement;
    el.click();

    expect(component.newRoom).toHaveBeenCalled();

  })

});
