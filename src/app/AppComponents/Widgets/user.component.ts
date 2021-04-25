import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../AppServices/auth.service';
import{ env} from '../../../environments/environment.prod';
@Component({
  selector: 'app-user',
  template: `
    <button
      class="matero-toolbar-button matero-avatar-button"
      mat-button
      [matMenuTriggerFor]="menu"
    >
      <img class="matero-avatar" [src]="user.avatar" width="32" alt="avatar" />
      <span class="matero-username" fxHide.lt-sm>{{ user.name }}</span>
    </button>

    <mat-menu #menu="matMenu">
      <button (click)="openProfile()" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>User Profile</span>
      </button>
      <button mat-menu-item (click)="signOutUserAccount()">
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
})
export class UserWidgetComponent implements OnInit {
  user: any={
    name:'Shubham Dubey',
    avatar:'../../assets/images/user.png',
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    this.user=(localStorage.getItem(env.authDB) ? JSON.parse(localStorage.getItem(env.authDB)) : []);
    this.user.avatar='../../assets/images/user.png';
  } 

  openProfile(){
    const data:any=(localStorage.getItem(env.authDB) ? JSON.parse(localStorage.getItem(env.authDB)) : []);
    if(data){
      this.auth.navigateByUrl('/user-profile',{mobile:data.mobile});
    }
  }

  
  /**@LOGOUT */
  signOutUserAccount(): void {
    this.auth.newSharedData({}, 'USER_LOGOUT');
  }
  
}
