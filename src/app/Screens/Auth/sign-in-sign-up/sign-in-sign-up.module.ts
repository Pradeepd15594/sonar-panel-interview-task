import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInSignUpRoutingModule } from './sign-in-sign-up-routing.module';
import { SignInSignUpComponent } from './sign-in-sign-up.component';
import { NumbersOnlyModule } from '../../../AppDirectives/numberOnly.directive';
import { MaterialModule } from '../../../Material/material.module';
@NgModule({
  declarations: [SignInSignUpComponent],
  imports: [
    CommonModule,MaterialModule,
    SignInSignUpRoutingModule,FormsModule, ReactiveFormsModule,NumbersOnlyModule
  ]
})
export class SignInSignUpModule { }
