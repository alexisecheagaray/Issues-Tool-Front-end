import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestService{
  public url: string;
  public consultant : any;

	constructor(public _http : HttpClient){
		this.url = environment.url;
    }
    
    login( user ): Observable<any>{
      //console.log(user);
      this.consultant = {
        "user": user.user,
        "password": user.password
      }
      console.log(this.consultant);

      let params = JSON.stringify(user);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'login/', params, {headers:headers});
    }

    getLoginUser(): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'login/', {headers:headers});
    }

    getAdminSupport(): Observable<any>{
        let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
            return this._http.get(this.url+'list_admin_support/', {headers:headers});
    }

    getInformation(){
      return this._http.get(environment.loginData);
    }

    getUserData( userEmail ): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'get_user/' + userEmail, {headers:headers});
    }

    getDepartmentName( userEmail ): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'get_department_by_admin_support/' + userEmail, {headers:headers});
    }

    /////////////////////////CUSTOMER
    //View Request User
    getRequestsUser( userEmail ): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa('root:123456'));
      return this._http.get(this.url+'get_request_user/' + userEmail, {headers:headers});
    }

    /////////////////////////SUPPORT DEPARTMENT
    //View Request Support Department
    getRequestsSupportDepartment( userEmail ): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'get_request_involved/' + userEmail, {headers:headers});
    }

    ///////////////////////////////////  REQUESTS //////////////////////////////////
    //////////////ADMIN
    getListClosedAdmin(): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'list_closed/', {headers:headers});
    }

    getListBySearchAdmin(description): Observable<any>{
      let params = JSON.stringify(description);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'administrator_get_request_by_description/', params, {headers:headers});
    } 
    //////////////Support Department
    getListClosedSupportDepartment(userEmail): Observable<any>{

      let params = JSON.stringify(userEmail);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
        return this._http.post(this.url+'get_request_involved_closed/', {headers:headers});
    }

    getListBySearchSupportDepartment(requestSearch): Observable<any>{
      let params = JSON.stringify(requestSearch);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_request_involved_by_description/', params, {headers:headers});
    } 

    //////////////Customer
    getListClosedCustomer(userEmail): Observable<any>{

      let params = JSON.stringify(userEmail);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_request_user_closed/', params, {headers:headers});
    }

    getListBySearchCustomer(requestSearch): Observable<any>{
      let params = JSON.stringify(requestSearch);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_request_user_by_description/', params, {headers:headers});
    } 

  
    /////////////////// SEARCH //////////////////////

    ///////USER
    getListByName(userFirstName): Observable<any>{
      let params = JSON.stringify(userFirstName);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_by_first_name/', params, {headers:headers});
    }

    ///////DEPARTMENT
    getListByNameDepartment(departmentName): Observable<any>{
      let params = JSON.stringify(departmentName);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_department/', params, {headers:headers});
    }

    ///////PROBLEM TYPE 
    getListByNameProblemType(problemName): Observable<any>{
      let params = JSON.stringify(problemName);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
        );
      return this._http.post(this.url+'get_problem_type/', params, {headers:headers});
    }
    
                               //////// VIEW //////////

    //View User
    getUsers(): Observable<any>{
        let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
            return this._http.get(this.url+'list_user/', {headers:headers});
    }

    //View User
    searchUsers( buscar: string ): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'list_user?search=' + buscar, {headers:headers});
    }

    //View Department
    getDepartment(): Observable<any>{
        let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
            return this._http.get(this.url+'list_department/', {headers:headers});
    }

    //View Request
    getRequests(): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'list_request/', {headers:headers});
    }

    //View Tickets Count
    getTicketCount(): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'get_all_number_request/', {headers:headers});
    }

    //View Problem Type
    getProblemType(): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
          return this._http.get(this.url+'list_problem_type/', {headers:headers});
    }

                                ////////  CREATE /////////// 
    
    //Create a User
    createNewUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set(
          'Authorization',
          'Basic ' + btoa('root:123456')
          );
          return this._http.post(this.url+'new_user/', params, {headers:headers});
    }

    //Create a Request
    createRequest(request): Observable<any> {
      let params = JSON.stringify(request);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'new_request/', params, {
        headers: headers,
      });
    }

    //Create a Department
    createDepartment(department): Observable<any> {
      let params = JSON.stringify(department);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'new_department/', params, {
        headers: headers,
      });
    }

    //Create a Problem Type
    createProblemType(problemType): Observable<any> {
      let params = JSON.stringify(problemType);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'new_problem_type/', params, {
        headers: headers,
      });
    }

    

    
    

                            ///////// DELETE ////////

    deleteUser(id): Observable<any>{
        let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
        return this._http.get(this.url+'delete_user/'+ id, {headers:headers});
    }

    deleteDepartment(id): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
      return this._http.get(this.url+'delete_department/'+ id, {headers:headers});
    }

    deleteProblemType(id): Observable<any>{
      let headers = new HttpHeaders().set('Authorization','Basic ' + btoa("root:123456"));
      return this._http.get(this.url+'delete_problem_type/'+ id, {headers:headers});
    }

                            ///////// UPDATE ////////

    //////// USER
    updateUser(user): Observable<any> {
      let params = JSON.stringify(user);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'update_user/', params, {
        headers: headers,
      });
    } 
    
    //////// USER
    updateDepartment(department): Observable<any> {
      let params = JSON.stringify(department);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'update_department/', params, {
        headers: headers,
      });
    }  

    //////// PROBLEM TYPE
    updateProblemType(problemType): Observable<any> {
      let params = JSON.stringify(problemType);
      let headers = new HttpHeaders().set(
        'Authorization',
        'Basic ' + btoa('root:123456')
      );
      return this._http.post(this.url + 'update_problem_type/', params, {
        headers: headers,
      });
    }    
    
}