import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../AppServices/auth.service';
import {Router} from '@angular/router';
import{ ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import{ env} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.scss']
})
export class SignInSignUpComponent implements OnInit {
  errorMessage:any='';
  userName:any;
  password:any;
  viewScreen:any=1;
  showResetPassword:any=0;
  otp:any;
  mobile:any;
  newpassword:any;
  email:any;
  employeeId:any;

  signInForm:FormGroup;
  signUpForm:FormGroup;

  constructor(private authService:AuthService,private router:Router,private fb: FormBuilder, private route: ActivatedRoute) {
      if(localStorage.getItem(env.authDB)){
      }else{
        this.authService.navigateByUrl('login',{});
      }
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['' ,[Validators.required,Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)]],
      password: ['' ,[Validators.required,Validators.minLength(8)]],
      userType: ['Admin' ,[Validators.required]],
    });
    
    this.signUpForm = this.fb.group({
      name: ['' ,[Validators.required]],
      email: ['' ,[Validators.required, Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`)]],
      mobile: ['' ,[Validators.required,Validators.minLength(10)]],
      password: ['' ,[Validators.required,Validators.minLength(8)]],
      userType: ['' ,[Validators.required]],
    });
    
  }
  verifyNumber:any;

  /**@USERS_AUTHENTICATION */
  onSignIn(){
    if(this.signInForm.invalid){
      this.validateAllFormFields(this.signInForm);
    }else{
      const data=(localStorage.getItem(env.Registration) ? JSON.parse(localStorage.getItem(env.Registration)) : []);
      let isLogged=false;
      for (let i = 0; i < data.length; i++) {
        if(data[i].email==this.signInForm.value.email && data[i].password==this.signInForm.value.password && data[i].userType==this.signInForm.value.userType){
          isLogged=true;
          localStorage.setItem(env.authDB, JSON.stringify(data[i]));
          this.authService.navigateByUrl(env.defaultAppRedirectURI,{mobile:data[i].mobile});
          this.errorMessage='';
          setTimeout(() => {
            this.authService.newSharedData(data[i], 'USER_LOGIN_SUCCESS');
          }, 150);
        }
      }

      if(!isLogged){
        this.errorMessage='Sorry, Your login credential incorrect';
      }

    }
  }

  /**@SignUp_USERS_AUTHENTICATION */
  onSignUp(){
    console.log(this.signUpForm);
    
    if(this.signUpForm.invalid){
      this.validateAllFormFields(this.signUpForm);
    }else{
      const data=(localStorage.getItem(env.Registration) ? JSON.parse(localStorage.getItem(env.Registration)):[]);
      if(data.length>0){
        let temp:any=this.signUpForm.value;
        temp.createdDate=(new Date()).getTime();
        data.push(temp);
        localStorage.setItem(env.Registration, JSON.stringify(data));
      }else{
        let temp:any=[];
        temp.push(this.signUpForm.value);
        temp[0].createdDate=(new Date()).getTime();
        localStorage.setItem(env.Registration, JSON.stringify(temp));
      }

      this.authService.openSnackBar('SignUp Successfully Done','success');
      this.viewScreen=1;
      this.signInForm.get('userType').setValue(this.signUpForm.value.userType);
      this.signInForm.get('email').setValue(this.signUpForm.value.email);
      // console.log( this.authService.decryption(this.authService.encryption('admin@gmail.,`-com')),'dec');
    }
  }

  /** @TOUCH_FORM_FIELDS */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);           
      if (control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup){
        this.validateAllFormFields(control);       
      }
    });
  }

}
