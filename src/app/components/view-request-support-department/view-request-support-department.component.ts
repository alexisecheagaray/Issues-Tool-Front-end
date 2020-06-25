import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-request-support-department',
  templateUrl: './view-request-support-department.component.html',
  styleUrls: ['./view-request-support-department.component.css'],
  providers: [RequestService]
})
export class ViewRequestSupportDepartmentComponent implements OnInit {
  RequestByDescriptionSupportForm: FormGroup;
  public requestProblem:  any;
  public departmentName:  any;
  public requestUnico:    any;
  public requestByID:     any;
  public loginUsers:      any;
  public dataUser:        any;
  public requests:        any;
  public count:           any;
  
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) {
    this.RequestByDescriptionSupportForm = this.fb.group({
      description:  ''
    });
  }

  public requestClosed = {
    "mail":  ""
  };

  public requestByDescription = {
    "mail":         "",
    "description":  ""
  }

  ngOnInit(): void {
    this.getDepartmentName();
    this.getRequests();
    this.getUserInfo();
  }

  requestSearchID(id){
    this._requestService.getRequestByID(id).subscribe(
      (response) => {
        this.requestByID = response;
        console.log('Request by ID:', this.requestByID);
        this.requestUnico = this.requestByID[0].description;
        this.requestProblem = this.requestByID[0].problem_type;
        console.log(this.requestUnico);
        console.log(this.requestProblem);
      },
      (error) => {}
    );
  }

  requestSearch() {
    let userEmail = localStorage.getItem('email');
    
    this.requestByDescription.mail = userEmail;
    this.requestByDescription.description = this.RequestByDescriptionSupportForm.value.description;

    console.log(this.requestByDescription);

    this._requestService.getListBySearchSupportDepartment( this.requestByDescription ).subscribe(
      (response) => {
        this.requests = response;
      },
      (error) => {}
    );
  }

  getAll(){
    this.getRequests();
  }

  getClosed(){
    let userEmail = localStorage.getItem('email');
    
    this.requestClosed.mail = userEmail;

    console.log("CORREO: ", this.requestClosed);

    this._requestService.getListClosedSupportDepartment( this.requestClosed ).subscribe(
      //this._requestService.getListClosedSupportDepartment( this.requestClosed ).subscribe(
      (response) => {
        this.requests = response;
        console.log('Those are the requests: ', this.requests);
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
    console.log('User email: ' , userEmail);

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




