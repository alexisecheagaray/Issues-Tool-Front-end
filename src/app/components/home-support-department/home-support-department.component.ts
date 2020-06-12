import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-support-department',
  templateUrl: './home-support-department.component.html',
  styleUrls: ['./home-support-department.component.scss'],
  providers: [RequestService],
})
export class HomeSupportDepartmentComponent implements OnInit {
  public departmentName:  any;
  public loginUsers:      any;
  public dataUser:        any;
  public requests:        any;
  public count:           any;

  constructor(
    private _requestService: RequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartmentName();
    this.getRequests();
    this.getUserInfo();
  }

  getRequests() {
    let userEmail = localStorage.getItem('email');
    console.log('User email: ', userEmail );

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


