import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInSignUpComponent } from './sign-in-sign-up.component';

const routes: Routes = [{ path: '', component: SignInSignUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInSignUpRoutingModule { }
