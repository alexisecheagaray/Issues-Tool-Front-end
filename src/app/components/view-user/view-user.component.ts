import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { stringify } from 'querystring';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
  providers: [RequestService]
})
export class ViewUserComponent implements OnInit {
  userByNameForm:     FormGroup;
  public loginUsers:  any;
  public dataUser:    any;
  public users:       any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
    ) {
      this.userByNameForm = this.fb.group({
        name:  ''
      });
    }

    public userByName = {
      "name": "" 
    }

  ngOnInit(): void {
    this.getUsers();
    this.getUserInfo();
  }

  searchUsers() {
    this.userByName.name = this.userByNameForm.value.name;

    console.log("User name", this.userByName)

    this._requestService.getListByName( this.userByName ).subscribe(
      (response) => {

        console.log( JSON.stringify( response ) );

        this.users = response;
        console.log("User by Name", this.users);
      },
      (error) => {}
    );
  }

  getUsers(){
    this._requestService.getUsers().subscribe(
      response => {
         this.users = response;
         console.log( JSON.stringify( response ) );
         
        console.log("hello users", this.users);
      },
      error => {
      }
      );
  }
  /*
  delete(id){
    this._requestService.deleteUser(id).subscribe(
      response => {
        alert(response)
        window.location.reload();
      },
      error => {
      }
      );
  }*/

  getUserInfo(){
    let userEmail = localStorage.getItem('email');

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
