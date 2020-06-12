import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-problem-type',
  templateUrl: './create-problem-type.component.html',
  styleUrls: ['./create-problem-type.component.css'],
  providers: [RequestService]
})
export class CreateProblemTypeComponent implements OnInit {
  createProblemTypeForm : FormGroup;
  public loginUsers:  any;
  public dataUser:    any;

  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) { 
    this.createProblemTypeForm = this.fb.group({
      name : '',
      description: ''
    })
  }

  public new_problemType = {
    "name": "",
    "description": ""
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  saveProblemType(){
    this.new_problemType.name         = this.createProblemTypeForm.value.name;
    this.new_problemType.description  = this.createProblemTypeForm.value.description;
    
    console.log(this.new_problemType.name, this.new_problemType.description);

    this._requestService.createProblemType(this.new_problemType).subscribe(
      response => {
        alert(response);
        window.location.reload();
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
