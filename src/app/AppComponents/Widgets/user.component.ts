import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../AppServices/auth.service';

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
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>{{ 'user.profile'}}</span>
      </button>
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>{{ 'user.settings' }}</span>
      </button>
      <button mat-menu-item (click)="signOutUserAccount()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'user.logout'}}</span>
      </button>
    </mat-menu>
  `,
})
export class UserWidgetComponent implements OnInit {
  user: any={
    name:'Pradeep Dubey',
    avatar:'../../assets/images/user.png',
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    
  }

  
  /**@LOGOUT */
  signOutUserAccount(): void {
    this.auth.newSharedData({}, 'USER_LOGOUT');
  }
  
}
