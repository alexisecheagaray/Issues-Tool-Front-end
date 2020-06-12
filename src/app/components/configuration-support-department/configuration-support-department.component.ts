import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration-support-department',
  templateUrl: './configuration-support-department.component.html',
  styleUrls: ['./configuration-support-department.component.css'],
  providers: [RequestService],
})
export class ConfigurationSupportDepartmentComponent implements OnInit {
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
