import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../AppServices/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile=JSON.parse(sessionStorage.getItem('userProfile'));
  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    
    console.log(this.authService.getParmsData().mobile,'this.authService.getParmsData()');
    this.userProfile=this.authService.getUserList(this.authService.getParmsData().mobile);
    
  }

}
