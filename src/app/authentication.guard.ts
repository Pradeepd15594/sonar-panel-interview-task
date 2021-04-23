import { Injectable, NgZone } from '@angular/core';
import { CanLoad , ActivatedRouteSnapshot,ActivatedRoute, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from './AppServices/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { Router, Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad  {
  
    Roles:any=[];
    userAuth:any={};
    parmsId:any=null;
    constructor(
        private authService: AuthService, 
        private router: Router,
        private _route: ActivatedRoute) {
        this.setAuth();
    }

    ngOnInit() {
        let id = this._route.snapshot.params.id;
    }


    setAuth():any{
        try {
            let auth=localStorage.getItem('@userSession');
            console.log(auth);
            this.userAuth={};
            if(auth!="" && auth!=undefined && auth !=null){
                this.userAuth=JSON.parse((auth));
                let role:any=JSON.parse(localStorage.getItem('@userRoles'));
                if(this.userAuth.userType=='Admin'){
                    this.Roles=role.admin;
                }else if(this.userAuth.userType=='Student'){
                    this.Roles=role.student;
                }else if(this.userAuth.userType=='Teacher'){
                    this.Roles=role.teacher;
                }
            }
        } catch (error) {
            // this.router.navigateByUrl("/login");
        }
    }

    canLoad(route: Route) :Observable<boolean>|boolean  {
        this.setAuth();
        console.log(route.path, 'route.path');
        
        switch (route.path) {
            case 'user-lists':
                if(this.Roles?.manageUsers?.view!=true && this.Roles?.manageUsers?.view!=undefined){ 
                    this.router.navigateByUrl("/404");
                    return false;
                }
            return true;

            case 'user-roles':
                if(this.Roles?.userRoles?.view!=true && this.Roles?.userRoles?.view!=undefined){ 
                    this.router.navigateByUrl("/404");
                    return false;
                }
            return true;

            case 'login':
                if(this.userAuth?.userType){ 
                    this.router.navigateByUrl("/dashboard");
                    return false;
                }
            return true;
        }
     
        // return true; 
    }


    // public CanActive (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    //     this.setAuth();
    //     console.log(this.Roles, 'this.Roles',route.routeConfig.path);
    //     switch (route.routeConfig.path) {
    //         case 'user-lists':
    //             console.log('A');
                
    //             if(this.Roles?.manageUsers?.view!=true && this.Roles?.manageUsers?.view!=undefined){ 
    //               this.router.navigateByUrl("/404");
    //               console.log('AA');
    //               return false;
    //             }
    //         break;

    //         default:
    //             return true;
    //     }
        
    // }
  
}