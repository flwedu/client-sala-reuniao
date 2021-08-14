import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  { path: 'list', component: RoomListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: RoomCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
