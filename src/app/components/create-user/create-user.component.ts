import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [RequestService]
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  public loginUsers:  any;
  public dataUser:    any;
  admin_info: any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) { 
    this.createUserForm = this.fb.group({
      first_name :      '',
      last_name :       '',
      phone :           '',
      email :           '',
      employee_serial : ''
    })
  }

  public new_user = {
    "first_name":       "",
    "last_name":        "",
    "phone":            "",
    "email":            "",
    "employee_serial":  ""
  }

  ngOnInit(): void {
    this.getUserInfo();
    this._requestService.getInformation().subscribe(
      response => {
        this.admin_info = response;
        console.log(this.admin_info);
      },
      error => {
      }
    );
  }

  saveUser(){
    this.new_user.first_name      = this.createUserForm.value.first_name;
    this.new_user.last_name       = this.createUserForm.value.last_name;
    this.new_user.phone           = this.createUserForm.value.phone;
    this.new_user.email           = this.createUserForm.value.email;
    this.new_user.employee_serial = this.createUserForm.value.employee_serial;
    console.log(this.new_user);

    this._requestService.createNewUser(this.new_user).subscribe(
      response => {
        alert(response);
        window.location.reload();
      },
      error => {
      }
    );
  }

  getUserInfo(){
    let userEmail = localStorage.getItem('email');
    console.log('User email: ' , userEmail );

    this._requestService.getUserData( userEmail ).subscribe(
      (response) => {
        this.dataUser = response;
        console.log('Information about the user: ', this.dataUser );
      },
      (error) => {}
    );

  }

  getNameUser(){
    this._requestService.getLoginUser().subscribe(
      (response) => {
        this.loginUsers = response;
      },
      (error) => {}
    );
  }
}