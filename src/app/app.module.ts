import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomService } from './core/service/room.service';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomUpdateComponent } from './room-update/room-update.component';

@NgModule({
  declarations: [AppComponent, RoomListComponent, RoomCreateComponent, RoomDetailsComponent, RoomUpdateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
