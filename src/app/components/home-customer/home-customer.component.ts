import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.scss'],
  providers: [RequestService],
})
export class HomeCustomerComponent implements OnInit {
  public requestProblem:  any;
  public requestUnico:    any;
  public requestByID:     any;
  public loginUsers:      any;
  public dataUser:        any;
  public requests:        any;
  public count:           any;

  constructor(
    private _requestService: RequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getRequests();
    this.getUserInfo();
  }

  
  getRequests() {
    let userEmail = localStorage.getItem('email');
    console.log('User email: ' ,userEmail);

    this.count = 0;
    this._requestService.getRequestsUser( userEmail ).subscribe(
      (response) => {
        this.requests = response;
        this.count = this.requests.length;
        console.log('Those are the requests: ', this.requests);
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
        console.log(this.requestProblem);
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
