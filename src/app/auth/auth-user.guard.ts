import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

  constructor(
    private login_service: AuthService,
    private router:Router 
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log("Check User")
    let typeUser = localStorage.getItem('type');
    let isLoggedIn = Boolean(localStorage.getItem('isLogin'));

    console.log(typeUser,isLoggedIn);
    
    if(isLoggedIn && typeUser === "User"){
      return true;  
    }
    this.login_service.redirectUrl=state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
