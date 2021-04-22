import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../AppServices/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  manageUsers:any={view:false, add:false,edit:false};
  userRoles:any={view:false, add:false,edit:false};
  userType:string="";

  rolesList:any=[];
  constructor(private authService:AuthService, private _snackBar:MatSnackBar) {
    this.rolesList=JSON.parse(localStorage.getItem('@userRoles'));
    
  }

  ngOnInit(): void {
    // this.authService.shairedData.subscribe(res => {
    //   if(res!=null && res!='' && res!=undefined){
    //     this.rolesList=JSON.parse(localStorage.getItem('@userRoles'));
    //   }
    // })
  }


  /*submitRole*/
  submitRole(){
    let temp:any={
      manageUsers:this.manageUsers,
      userRoles:this.userRoles,
    };

    if(this.userType!=""){

      if(this.userType=='Student'){
        this.rolesList.student.manageUsers=this.manageUsers;
        this.rolesList.student.userRoles=this.userRoles;
  
      }else if(this.userType=='Teacher'){
        this.rolesList.teacher.manageUsers=this.manageUsers;
        this.rolesList.teacher.userRoles=this.userRoles;
      }
      localStorage.setItem('@userRoles', JSON.stringify(this.rolesList));
      this.openSnackBar('Successfully user added','');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{ duration: 3000});
  }

  onChange($event){

    if($event=='Student'){
      this.manageUsers=this.rolesList.student.manageUsers;
      this.userRoles=this.rolesList.student.userRoles;

    }else if($event=='Teacher'){
      this.manageUsers=this.rolesList.teacher.manageUsers;
      this.userRoles=this.rolesList.teacher.userRoles;
    }
  }

}
