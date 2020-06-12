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
  public requestsClosed:  any;
  public requestValue:    any;
  public loginUsers:      any;
  public requests:        any;
  public dataUser:        any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
    ) {
      this.RequestByDescriptionForm = this.fb.group({
        description:  ''
      });
    }

  public requestByDescription = {
    "description":  ""
  }

  ngOnInit(): void {
    this.getRequests();    
    this.getUserInfo();
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
