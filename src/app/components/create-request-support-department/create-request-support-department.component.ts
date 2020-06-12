import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-request-support-department',
  templateUrl: './create-request-support-department.component.html',
  styleUrls: ['./create-request-support-department.component.scss'],
  providers: [RequestService],
})
export class CreateRequestSupportDepartmentComponent implements OnInit {
  CreateRequestSupportDepartmentForm: FormGroup;
  public departmentName:  any;
  public loginUsers:      any;
  public dataUser:        any;
  public problems:        any;
  public requests:        any;
  public count:           any;
  admin_info:             any;


  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder)
    {
      this.CreateRequestSupportDepartmentForm = this.fb.group({
        problem_type: '',
      description:    '',
      id_user:        '',
      priority:       '',
      country:        '',
      });
    }

    public new_request = {
      "id_problem_type":  "",
      "description":      "",
      "user_id_creation": "",
      "priority":         "",
      "country":          "",
    };

  ngOnInit(): void {
    this.getProblemType();
    this.getUserInfo();
    this._requestService.getInformation().subscribe(
      response => {
        this.admin_info = response;
        console.log(this.admin_info);
      },
      error => {
      }
    );
    this.getRequests();
    this.getDepartmentName();
  }

  saveRequest() {
    this.new_request.id_problem_type  = this.CreateRequestSupportDepartmentForm.value.problem_type;
    this.new_request.user_id_creation = this.CreateRequestSupportDepartmentForm.value.id_user;
    this.new_request.description      = this.CreateRequestSupportDepartmentForm.value.description;
    this.new_request.priority         = this.CreateRequestSupportDepartmentForm.value.priority;
    this.new_request.country          = this.CreateRequestSupportDepartmentForm.value.country;
    console.log(this.new_request);

    this._requestService.createRequest(this.new_request).subscribe(
      (response) => {
        alert(response);
        window.location.reload();
      },
      (error) => {}
    );
  }


  getRequests() {
    let userEmail = localStorage.getItem('email');
    console.log('User email: ',userEmail);

    this.count = 0;
    this._requestService.getRequestsSupportDepartment( userEmail ).subscribe(
      (response) => {
        this.requests = response;
        this.count = this.requests.length;
        console.log('Those are the requests: ', this.requests);
      },
      (error) => {}
    );
  }

  getProblemType(){
    this._requestService.getProblemType().subscribe(
      response => {
        this.problems = response;
        console.log("This are the problems", this.problems);
      },
      error => {
      }
      );
  }

  getDepartmentName(){
    let userEmail = localStorage.getItem('email');

    this._requestService.getDepartmentName( userEmail ).subscribe(
      (response) => {
        this.departmentName = response;
        console.log('Department Name: ', this.departmentName );
      },
      (error) => {}
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


