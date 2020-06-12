import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-problem-type',
  templateUrl: './view-problem-type.component.html',
  styleUrls: ['./view-problem-type.component.css'],
  providers: [RequestService]
})
export class ViewProblemTypeComponent implements OnInit {
  problemByNameForm:     FormGroup;
  public updateProblemForm: any;
  public problemTypes:      any;
  public loginUsers:        any;
  public dataUser:          any;

  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
  ) { 
    this.updateProblemForm = this.fb.group({
      name :        '',
      description:  ''
    });
    this.problemByNameForm = this.fb.group({
      name:  ''
    });
  }

  public update_problemType = {
    "name":         "",
    "description":  ""
  }

  public problemByName = {
    "name": "" 
  }

  ngOnInit(): void {
    this.getProblemType();
    this.getUserInfo();
  }

  searchProblem() {
    this.problemByName.name = this.problemByNameForm.value.name;

    console.log("Problem Type name", this.problemByName)

    this._requestService.getListByNameProblemType( this.problemByName ).subscribe(
      (response) => {

        console.log( JSON.stringify( response ) );

        this.problemTypes = response;
        console.log("Problem by Name", this.problemTypes);
      },
      (error) => {}
    );
  }

  getProblemType(){
    this._requestService.getProblemType().subscribe(
      response => {
        this.problemTypes = response;
        console.log("This are the problems types: ", this.problemTypes);
      },
      error => {
      }
      );
  }

  updateProblemType(){
    this.update_problemType.name         = this.updateProblemForm.value.name;
    this.update_problemType.description  = this.updateProblemForm.value.description;
    
    console.log(this.update_problemType.name, this.update_problemType.description);

    this._requestService.updateProblemType(this.update_problemType).subscribe(
      response => {
        alert(response);
        console.log("This are the problems types update: ", this.problemTypes);
        window.location.reload();
      },
      error => {
      }
    );
  }
  /*
  delete(id){
    this._requestService.deleteProblemType(id).subscribe(
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
