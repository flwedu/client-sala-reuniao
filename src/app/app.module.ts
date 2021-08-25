import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RoomService } from './core/service/room.service';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomCardComponent } from './shared/component/room-card/room-card.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoomComponent } from './shared/component/form-room/form-room.component';
import { FormRoomErrorMessageComponent } from './shared/component/form-room-error-message/form-room-error-message.component';
import { LoadingMessageComponent } from './shared/component/loading-message/loading-message.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomCreateComponent,
    RoomDetailsComponent,
    RoomUpdateComponent,
    RoomCardComponent,
    HeaderComponent,
    FooterComponent,
    FormRoomComponent,
    FormRoomErrorMessageComponent,
    LoadingMessageComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
