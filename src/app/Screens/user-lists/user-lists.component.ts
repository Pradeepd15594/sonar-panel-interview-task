import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../AppServices/auth.service';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import{ env} from '../../../environments/environment.prod';
@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  userListArray:any=[];
  showDialog:boolean=false;
  isUpdate:boolean=false;
  userForm:FormGroup;
  errorMessage:any='';
  selectedEditValue:any=[];
  constructor(private authService:AuthService, private fb:FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userListArray=this.authService.getUserList(null);
    this.userForm = this.fb.group({
      name: ['' ,[Validators.required]],
      email: ['' ,[Validators.required, Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)]],
      mobile: ['' ,[Validators.required,Validators.minLength(10)]],
      password: ['' ,[Validators.required,Validators.minLength(8)]],
      userType: ['' ,[Validators.required]],
    });
    
  }

    /**@Submit_USERS_AUTHENTICATION */
    onSubmit(){
      if(this.userForm.invalid){
        this.authService.validateAllFormFields(this.userForm);
      }else{
        const data=(localStorage.getItem(env.Registration) ? JSON.parse(localStorage.getItem(env.Registration)) : []);
        if(this.isUpdate){
          data[this.selectedEditValue._id]=this.userForm.value;
          this.userListArray[this.selectedEditValue._id]=this.userForm.value;
          localStorage.setItem(env.Registration, JSON.stringify(data));
        }else{
          if(data.length>0){
            
            let temp:any=this.userForm.value;
            temp.createdDate=(new Date()).getTime();
            data.push(temp);

            localStorage.setItem(env.Registration, JSON.stringify(data));
            this.userListArray.push(this.userForm.value);
          }else{
            let temp:any=[];
            temp.push(this.userForm.value);
            temp[0].createdDate=(new Date()).getTime();
            localStorage.setItem(env.Registration, JSON.stringify(temp));
            this.userListArray.push(this.userForm.value);
          }
        }
        

        this.showDialog=!this.showDialog;
        this.userForm.reset();
        this.isUpdate=false;
        setTimeout(() => {
          this.openSnackBar('Successfully user added','');
        },500)
        // console.log( this.authService.decryption(this.authService.encryption('admin@gmail.,`-com')),'dec');
      }
    }

    edit(v,i){
      v._id=i;
      this.selectedEditValue=v;
      this.showDialog=!this.showDialog;
      this.isUpdate=true;
      this.userForm.controls['name'].setValue(v.name);
      this.userForm.controls['mobile'].setValue(v.mobile);
      this.userForm.controls['email'].setValue(v.email);
      this.userForm.controls['password'].setValue(v.password);
      this.userForm.controls['userType'].setValue(v.userType);
    }

    deleteUser(i){
      this.userListArray.splice(i,1);
      localStorage.setItem(env.Registration, JSON.stringify(this.userListArray));
      this.openSnackBar('Successfully Deleted','delete');
    }


    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action,{ duration: 3000});
    }

    openProfile(v){
      sessionStorage.setItem('userProfile', JSON.stringify(v));
      this.authService.navigateByUrl('user-profile',{mobile:v.mobile});
    }


}
