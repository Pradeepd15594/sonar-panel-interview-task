import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListsComponent } from './user-lists.component';

const routes: Routes = [{ path: '', component: UserListsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListsRoutingModule { }
