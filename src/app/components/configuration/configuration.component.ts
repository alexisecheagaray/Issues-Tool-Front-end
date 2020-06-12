import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers: [RequestService],
})
export class ConfigurationComponent implements OnInit {
  public loginUsers:  any;
  public dataUser:    any;
  constructor(
    private _requestService: RequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    //this.getUserPassword();
  }
  /*
  getUserPassword(){
    let userPassword = localStorage.getItem('password');
    console.log('User Password: ' , userPassword );

    this._requestService.getUserData( userPassword ).subscribe(
      (response) => {
        this.dataUser = response;
        console.log('Information about the user: ', this.dataUser);
      },
      (error) => {}
    );
  }*/

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
  /*
  getNameUser(){
    this._requestService.getLoginUser().subscribe(
      (response) => {
        this.loginUsers = response;
        console.log("USer: ", this.loginUsers);
        
      },
      (error) => {}
    );
  }*/

}
