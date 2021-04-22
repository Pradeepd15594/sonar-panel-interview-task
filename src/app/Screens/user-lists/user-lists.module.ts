import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListsRoutingModule } from './user-lists-routing.module';
import { UserListsComponent } from './user-lists.component';
import { MaterialModule } from '../../Material/material.module';
import { ModalComponent } from '../../AppComponents/Modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyModule } from '../../AppDirectives/numberOnly.directive';
@NgModule({
  imports: [
    CommonModule,MaterialModule,
    UserListsRoutingModule,FormsModule, ReactiveFormsModule, NumbersOnlyModule
  ],
  declarations: [UserListsComponent,ModalComponent],
  exports:[ModalComponent],
  entryComponents:[]
})
export class UserListsModule { }
