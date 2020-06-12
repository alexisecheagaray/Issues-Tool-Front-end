import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-configuration-customer',
  templateUrl: './configuration-customer.component.html',
  styleUrls: ['./configuration-customer.component.css'],
  providers: [RequestService],
})
export class ConfigurationCustomerComponent implements OnInit {
  public loginUsers:  any;
  public dataUser:    any;
  constructor(
    private _requestService: RequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
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
}
