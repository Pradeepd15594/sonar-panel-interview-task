import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Material/material.module';
import { UserRolesRoutingModule } from './user-roles-routing.module';
import { UserRolesComponent } from './user-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserRolesComponent],
  imports: [
    CommonModule,
    UserRolesRoutingModule,MaterialModule,FormsModule, ReactiveFormsModule
  ]
})
export class UserRolesModule { }
