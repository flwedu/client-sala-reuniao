import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomUpdateComponent } from './room-update/room-update.component';

const routes: Routes = [
  { path: 'list', component: RoomListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: RoomCreateComponent },
  { path: 'update/:id', component: RoomUpdateComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
