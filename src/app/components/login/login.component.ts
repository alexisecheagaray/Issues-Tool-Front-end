import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(
    private _requestService: AuthService,
    private _router: Router,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder) 
    { 
      this.loginForm = this.fb.group({
        user : "",
        password : ""
      })
    }

    public loginUser={
      "user": "",
      "password": ""
    }

  ngOnInit(): void {
  }

  login(){
    this.loginUser.user      = this.loginForm.value.user;
    this.loginUser.password  = this.loginForm.value.password;
    localStorage.setItem('email',this.loginUser.user);

    this._requestService.login(this.loginUser).subscribe(
      response => {
        //alert(response);
        //window.location.reload();
      },
      error => {
      }
    );
    
  }

}
