import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  typeUser: string;
  route_str_support_department: string;
  route_str_admin: string;
  route_str_user : string;

  constructor(
    private _requestService: RequestService, private _router: Router
  ) { 
    this.typeUser = localStorage.getItem('type');
    this.isLoggedIn = Boolean(localStorage.getItem('isLogin'));
    //Routes types of user
    this.route_str_admin = "/home";
    this.route_str_support_department = "/home-support-department"; 
    this.route_str_user = "/home-customer";
  }

  login(user :any): any {
    return this._requestService.login(user).pipe(
    
      tap(response => {
        if(response === 'Admin'){  //Si el login es para el administrador
          this.isLoggedIn = true;
          
          localStorage.setItem('type','Admin');
          localStorage.setItem('isLogin','true');
          this.typeUser = "Admin";

          //this.route_str_admin = localStorage.getItem("route");
          
          if(this.route_str_admin !== ""){
            this._router.navigate([this.route_str_admin]);
          }
        }
        else if(response === 'Support'){  //Si el login es para el support department
          this.typeUser = "Support";
          localStorage.setItem('isLogin','true');
          this.isLoggedIn = true;
          localStorage.setItem('type',"Support");
          this._router.navigate([this.route_str_support_department]);
        }

        else if(response === 'User'){  //Si el login es para el usuario regular
          this.typeUser = "User";
          localStorage.setItem('isLogin','true');
          this.isLoggedIn = true;
          localStorage.setItem('type',"User");
          this._router.navigate([this.route_str_user]);
        }
      })
    );
  }
}
