import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-request-customer',
  templateUrl: './view-request-customer.component.html',
  styleUrls: ['./view-request-customer.component.css'],
  providers: [RequestService]
})
export class ViewRequestCustomerComponent implements OnInit {
  RequestByDescriptionCustomerForm: FormGroup;
  public requestProblem:  any;
  public requestUnico:    any;
  public requestsUser:    any;
  public requestByID:     any;
  public loginUsers:      any;
  public dataUser:        any;
  public count:           any;

  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) {
    this.RequestByDescriptionCustomerForm = this.fb.group({
      description:  ''
    });
  }

  public requestClosed = {
    "mail":  "",
  };

  public requestByDescription = {
    "mail":         "",
    "description":  ""
  }

  ngOnInit(): void {
    this.getRequests();
    this.getUserInfo();
  }

  requestSearch() {
    let userEmail = localStorage.getItem('email');
    
    this.requestByDescription.mail = userEmail;
    this.requestByDescription.description = this.RequestByDescriptionCustomerForm.value.description;

    console.log(this.requestByDescription);

    this._requestService.getListBySearchCustomer( this.requestByDescription ).subscribe(
      (response) => {
        this.requestsUser = response;
      },
      (error) => {}
    );
  }

  requestSearchID(id){
    this._requestService.getRequestByID(id).subscribe(
      (response) => {
        this.requestByID = response;
        console.log('Request by ID:', this.requestByID);
        this.requestUnico = this.requestByID[0].description;
        this.requestProblem = this.requestByID[0].problem_type;

        console.log(this.requestUnico);
        
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

    this._requestService.getListClosedCustomer( this.requestClosed ).subscribe(
      (response) => {
        this.requestsUser = response;
        console.log('Those are the requests: ', this.requestsUser);
      },
      (error) => {}
    );
  }



  getRequests( ) {
    let userEmail = localStorage.getItem('email');
    this.count = 0;
    //console.log('Login User: ', this.loginUsers);
    this._requestService.getRequestsUser( userEmail ).subscribe(
      (response) => {
        this.requestsUser = response;
        this.count = this.requestsUser.length;
        console.log('Those are the requests: ', this.requestsUser);
      },
      (error) => {}
    );
  }

  getUserInfo(){
    let userEmail = localStorage.getItem('email');

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


