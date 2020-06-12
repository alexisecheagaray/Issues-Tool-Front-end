import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css'],
  providers: [RequestService]
})
export class CreateDepartmentComponent implements OnInit {
  createDepartmentForm: FormGroup;
  public loginUsers:    any;
  public dataUser:      any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) { 
    this.createDepartmentForm = this.fb.group({
      department : ''
    })
  }
  
  public new_department = {
    "department": ""
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  saveDepartment(){
    this.new_department.department = this.createDepartmentForm.value.department;
    console.log(this.new_department);

    this._requestService.createDepartment(this.new_department).subscribe(
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
    console.log('User email: ', userEmail );

    this._requestService.getUserData( userEmail ).subscribe(
      (response) => {
        this.dataUser = response;
        console.log('Information about the user: ', this.dataUser);
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
