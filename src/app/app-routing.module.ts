import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Screens/Authentication/dashboard/dashboard.component';
import {AuthenticationGuard} from './authentication.guard'; 
import {Screen404Component} from './Screens/screen404/screen404.component'; 


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent},
  { path: "404", component: Screen404Component},
  { path: 'teachers', canLoad:[AuthenticationGuard], loadChildren: () => import('./Screens/teachers/teachers.module').then(m => m.TeachersModule) },
  { path: 'students', canLoad:[AuthenticationGuard], loadChildren: () => import('./Screens/students/students.module').then(m => m.StudentsModule) },
  { path: 'login',canLoad:[AuthenticationGuard], loadChildren: () => import('./Screens/Auth/sign-in-sign-up/sign-in-sign-up.module').then(m => m.SignInSignUpModule) },
  { path: 'user-lists',canLoad:[AuthenticationGuard], loadChildren: () => import('./Screens/user-lists/user-lists.module').then(m => m.UserListsModule) },
  { path: 'user-roles',canLoad:[AuthenticationGuard], loadChildren: () => import('./Screens/user-roles/user-roles.module').then(m => m.UserRolesModule) },
  { path: 'user-profile', loadChildren: () => import('./Screens/user-profile/user-profile.module').then(m => m.UserProfileModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }