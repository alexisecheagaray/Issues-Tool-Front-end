import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css'],
  providers: [RequestService],
})
export class CreateRequestComponent implements OnInit {
  CreateRequestForm: FormGroup;
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
    this.CreateRequestForm = this.fb.group({
      problem_type: '',
      description:  '',
      id_user:      '',
      priority:     '',
      country:      '',
    });
  }

  public new_request = {
    "id_problem_type" : "",
    "description"     : "",
    "user_id_creation": "",
    "priority"        : "",
    "country"         : "",
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
    this.new_request.id_problem_type  = this.CreateRequestForm.value.problem_type;
    this.new_request.user_id_creation = this.CreateRequestForm.value.id_user;
    //this.new_request.user_id_creation = this.dataUser.id;
    this.new_request.description      = this.CreateRequestForm.value.description;
    this.new_request.priority         = this.CreateRequestForm.value.priority;
    this.new_request.country          = this.CreateRequestForm.value.country;
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
