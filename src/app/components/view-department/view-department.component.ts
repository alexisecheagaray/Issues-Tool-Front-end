import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css'],
  providers: [RequestService]
})
export class ViewDepartmentComponent implements OnInit {
  departmentByNameForm:     FormGroup;
  public department : any;
  public loginUsers:  any;
  public dataUser:    any;
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    public fb: FormBuilder
    ) {
      this.departmentByNameForm = this.fb.group({
        name:  ''
      });
    }

    public departmentByName = {
      "name": "" 
    }

  ngOnInit(): void {
    this.getDepartment();
    this.getUserInfo();
  }

  searchDepartment() {
    this.departmentByName.name = this.departmentByNameForm.value.name;

    console.log("Department name", this.departmentByName)

    this._requestService.getListByNameDepartment( this.departmentByName ).subscribe(
      (response) => {
        this.department = response;
        console.log("Department by Name", this.department);
      },
      (error) => {}
    );
  }

  getDepartment(){
    this._requestService.getDepartment().subscribe(
      response => {
        this.department = response;
        console.log("This are the departments: ", this.department);
      },
      error => {
      }
      );
  }
  /*
  delete(id){
    console.log("This is the department to delete: ",id );
    this._requestService.deleteDepartment(id).subscribe(
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
