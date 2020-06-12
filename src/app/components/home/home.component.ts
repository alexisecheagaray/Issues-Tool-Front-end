import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestService],
})
export class HomeComponent implements OnInit {
  public requests:    any;
  public loginUsers:  any;
  public dataUser:    any;
  public count:       any;

  constructor(
    private _requestService: RequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getRequests();
    this.getUserInfo();
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

  getUserInfo(){
    let userEmail = localStorage.getItem('email');
    console.log('User email: ' ,userEmail);

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