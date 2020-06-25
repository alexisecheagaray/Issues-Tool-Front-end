import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css'],
  providers: [RequestService]
})
export class ViewRequestComponent implements OnInit {
  RequestByDescriptionForm: FormGroup;
  CreateRequestUpdateForm:  FormGroup;
  RequestAnswerForm:        FormGroup;
  public requestsClosed:    any;
  public requestValue:      any;
  public loginUsers:        any;
  public requests:          any;
  public requestByID:       any;
  public requestUnico:      any;
  public requestProblem:    any;
  public dataUser:          any;
  public requestID:         any;
  public requestStatus:     any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
    ) {
      this.RequestByDescriptionForm = this.fb.group({
        description:  ''
      });
      this.CreateRequestUpdateForm = this.fb.group({
        id_department_support:  '',
        description:            '',
        status:                 '',
        id_request:             '',
      });
      this.RequestAnswerForm = this.fb.group({
        description: '',
      })
    }
  
  public requestByDescription = {
    "description":  ""
  }

  public requestUpdate = {
    "id_department_support":  "1",
    "description":            "",
    "status":                 "",
    "id_request":             "",
  }

  ngOnInit(): void {
    this.getRequests();    
    this.getUserInfo();
  }

  saveRequestUpdate(){
    
    //this.requestUpdate.id_department_support  = this.CreateRequestUpdateForm.value.id_department_support;
    this.requestUpdate.id_department_support  = "1";
    this.requestUpdate.description            = this.RequestAnswerForm.value.description;
    this.requestUpdate.status                 = this.requestStatus;
    this.requestUpdate.id_request             = this.requestID;

    console.log("problema resuelto:",this.requestUpdate);
    console.log("Respuesta:", this.requestUpdate.description  );
    
    this._requestService.createRequestUpdate(this.requestUpdate).subscribe(
      (response) => {
        alert(response);
        window.location.reload();
      },
      (error) => {}
    );
  }

  requestSearchID(id){
    this._requestService.getRequestByID(id).subscribe(
      (response) => {
        this.requestByID = response;
        //console.log('Request by ID:', this.requestByID);
        this.requestUnico   = this.requestByID[0].description;
        this.requestProblem = this.requestByID[0].problem_type;
        this.requestID      = this.requestByID[0].id;
        this.requestStatus  = this.requestByID[0].status;

        console.log("ID Department: ",this.requestUpdate.id_department_support );
        //console.log("Description: ",this.requestUnico);
        console.log("Problem Type: ",this.requestProblem);
        console.log("Request ID: ",this.requestID);
        console.log("Status: ",this.requestStatus);
      },
      (error) => {}
    );
  }


  requestSearch() {
    this.requestByDescription.description = this.RequestByDescriptionForm.value.description;

    console.log(this.requestByDescription);

    this._requestService.getListBySearchAdmin( this.requestByDescription ).subscribe(
      (response) => {
        this.requests = response;
      },
      (error) => {}
    );
  }

  getAll(){
    this.getRequests();
  }
  
  getRequests() {
    this._requestService.getRequests().subscribe(
      (response) => {
        this.requests = response;
        console.log('Those are the requests', this.requests);
      },
      (error) => {}
    );
  }

  getRequestsClosed() {
    this._requestService.getListClosedAdmin().subscribe(
      (response) => {
        this.requests = response;
        console.log('Those are the requests closed', this.requests);
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
