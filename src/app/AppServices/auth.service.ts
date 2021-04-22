import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpRequest } from '@angular/common/http';
import {Router} from '@angular/router';
import{ env} from '../../environments/environment.prod';
import { FormGroup ,FormControl} from '@angular/forms';

function urlSafeBase64Encode(text: string) {
  return btoa(text).replace(/[+/=]/g, m => {
    return { '+': '-', '/': '_', '=': '' }[m];
  });
}

function urlSafeBase64Decode(text: string) {
  return atob(
    text.replace(/[-_]/g, m => {
      return { '-': '+', '_': '/' }[m];
    })
  );
}

function generateToken(user: any) {
  const expiresIn = 3600;
  const header = JSON.stringify({ typ: 'JWT', alg: 'HS256' });
  const payload = JSON.stringify({ exp: Math.ceil(new Date().getTime() / 1000) + expiresIn, user });
  const key = 'ng-matero';

  const accessToken = [
    urlSafeBase64Encode(header),
    urlSafeBase64Encode(payload),
    urlSafeBase64Encode(key),
  ].join('.');

  return {
    access_token: accessToken,
    token_type: 'bearer',
    expires_in: expiresIn,
  };
}

function getUserFromJWTToken(req: HttpRequest<any>) {
  const authorization = req.headers.get('Authorization');
  const [, token] = authorization.split(' ');
  try {
    const [, payload] = token.split('.');

    const data = JSON.parse(urlSafeBase64Decode(payload));
    const d = new Date();
    d.setUTCSeconds(data.exp);
    if (new Date().getTime() > d.getTime()) {
      return null;
    }

    return data.user;
  } catch (e) {
    return null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public messageSource = new BehaviorSubject<any>([]); 
  public shairedData:any=[];

  constructor(private _router:Router) {
    this.shairedData=this.messageSource.asObservable();

    const data:any=(localStorage.getItem(env.Registration) ? JSON.parse(localStorage.getItem(env.Registration)) : []);
    if(data.length===0){
      let data=[{name:`Admin`, email:`admin@gmail.com`, mobile:`7803832269`, password:`admin@123`,userType:`Admin`,createdDate:'1619089643962'}];
      localStorage.setItem(env.Registration, JSON.stringify(data));
    }

    const roles:any=(localStorage.getItem('@userRoles') ? JSON.parse(localStorage.getItem('@userRoles')) : []);
    console.log(roles, 'roles');
    
    if(!roles || roles.length==0){
      let temp={
        student:{manageUsers:{view:false, add:false,edit:false},userRoles:{view:false, add:false,edit:false}},
        teacher:{manageUsers:{view:false, add:false,edit:false},userRoles:{view:false, add:false,edit:false}},
        admin:{manageUsers:{view:true, add:true,edit:true},userRoles:{view:true, add:true,edit:true}}
      }
      localStorage.setItem('@userRoles',JSON.stringify(temp));
    }

   


  }


  authenticate(username, password) {

  }

  /**@SHARED_MESSAGE */
  newSharedData(data: any, Type:string){
    this.messageSource.next(this.shairedData={Type,data});
  }





  /**@GET_TOKEN */
  getAuthToken(){
    return false;
  }

  /**@ENCRYPTION_KEY */
  encryption = (ciphertext:any) => {
    return urlSafeBase64Encode(ciphertext)
  };
  
  /**@DECRYPTION_KEY */
  decryption = (ciphertext:any) => {
    return urlSafeBase64Decode(ciphertext);
  };

  public navigateByUrl($uri){
    this._router.navigateByUrl("/"+$uri);
  }


  getUserList():any{
    return (localStorage.getItem(env.Registration) ? JSON.parse(localStorage.getItem(env.Registration)) : []);
  }

    
  /** @TOUCH_FORM_FIELDS */
  public  validateAllFormFields(formGroup: FormGroup) {
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