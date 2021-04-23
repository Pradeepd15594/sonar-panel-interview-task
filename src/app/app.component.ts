import { Component } from '@angular/core';
import {AuthService} from './AppServices/auth.service';
import{ env} from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options:any={showHeader:true};
  isOver:boolean = false;
  isMiniVarient:boolean = false;
  isAuthenticated:boolean = false;
  public isFullWindow:string = '';
  title = 'digital-dukaan';
  appModes:string = 'side'; //{'over' , 'side', 'rail'}

  constructor(public authService:AuthService){
    this.checkAuth();
  }

  ngOnInit(){
    this.checkAuth();

    let that=this;
    setInterval(()=>{
      let authdata:any=JSON.parse(localStorage.getItem(env.authDB));
      let userRoles:any=JSON.parse(localStorage.getItem('@userRoles'));
        if(authdata?.userType=='Student'){
          that.authService.newSharedData(userRoles.student, 'STUDENT_ROLE_BASED');
        }else if(authdata?.userType=='Teacher'){
          that.authService.newSharedData(userRoles.teacher, 'TEACHER_ROLE_BASED');
        }else if(authdata?.userType=='Admin'){
          that.authService.newSharedData(userRoles.admin, 'ADMIN_ROLE_BASED');
        }
        
      },3000)
  }

  private checkAuth(){
    console.log(localStorage.getItem(env.authDB),'localStorage.getItem(env.authDB)');
    
    if(localStorage.getItem(env.authDB)){
      this.isAuthenticated=true;
    }else{
      this.isAuthenticated=false;
      this.authService.navigateByUrl('login');
      console.log('navigateByUrl(');
    }
  }
  
  ngAfterViewInit(){
    let that=this;
    that.authService.shairedData.subscribe((res:any) => {
      if(res.Type===`TOGGLE_POPUP_REQUEST`){
        that.isFullWindow=(res.data? 'full-width' : '');
      }else if(res.Type===`USER_LOGIN_SUCCESS`){
        this.isAuthenticated=true;
      }else if(res.Type===`USER_LOGOUT`){
        localStorage.removeItem('@userSession');
        this.isAuthenticated=false;
        this.authService.navigateByUrl('login');
      }
    })
  }
  


  changeVarient(){
    if(this.appModes=="over"){
      this.appModes="side";
      this.isMiniVarient=false;
    }else{
      this.isMiniVarient=!this.isMiniVarient;
      this.isOver=false;
    }
  }

  /** @ON_MOUSE_ENTER */
  onMouseEnter(){
    if(this.isMiniVarient){
      this.appModes=`over`;
      this.isOver=true;
      this.isMiniVarient=false;
    }
  }

  /** @ON_MOUSE_ENTER */
  onMouseLeave(){
    if(this.appModes==`over`){
      this.isMiniVarient=true;
      this.appModes="side";
    }
  }


}
