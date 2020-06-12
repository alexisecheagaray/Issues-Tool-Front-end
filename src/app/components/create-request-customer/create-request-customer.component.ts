import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-request-customer',
  templateUrl: './create-request-customer.component.html',
  styleUrls: ['./create-request-customer.component.css'],
  providers: [RequestService],
})
export class CreateRequestCustomerComponent implements OnInit {
  CreateRequestCustomerForm: FormGroup;
  public loginUsers:  any;
  public dataUser:    any;
  public problems:    any;
  public requests:    any;
  public count:       any;
  admin_info:         any;

  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) {
    this.CreateRequestCustomerForm = this.fb.group({
      problem_type: '',
      description:  '',
      id_user:      '',
      priority:     '',
      country:      '',
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
  }

  getRequests() {
    this.count = 0;
    this._requestService.getRequests().subscribe(
      (response) => {
        this.requests = response;
        this.count = this.requests.length;
        console.log('Those are the requests: ', this.requests);
      },
      (error) => {}
    );
  }

  saveRequest() {
    //this.new_request.id_problem_type = this.CreateRequestForm.value.problem_type;
    /*var problemTypeName = this.CreateRequestCustomerForm.value.problem_type;
    console.log(problemTypeName);
    
    this.problems.forEach(element => { 
      if(element.name == problemTypeName){
        this.new_request.id_problem_type = element.id.toString();
      }
    });
    console.log(this.admin_info);*/

    //this.new_request.user_id_creation = this.admin_info.id_user;
    this.new_request.id_problem_type  = this.CreateRequestCustomerForm.value.problem_type;
    this.new_request.user_id_creation = this.CreateRequestCustomerForm.value.id_user;
    this.new_request.description      = this.CreateRequestCustomerForm.value.description;
    this.new_request.priority         = this.CreateRequestCustomerForm.value.priority;
    this.new_request.country          = this.CreateRequestCustomerForm.value.country;
    console.log(this.new_request);

    this._requestService.createRequest(this.new_request).subscribe(
      (response) => {
        alert(response);
        window.location.reload();
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
