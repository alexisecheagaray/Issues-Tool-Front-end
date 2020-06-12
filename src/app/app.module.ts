import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

              ////////////////////    ADMIN  ////////////////////////////
//User
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
//Home
import { HomeComponent } from './components/home/home.component';
//Request
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';

//Department
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';
//Problem Type
import { CreateProblemTypeComponent } from './components/create-problem-type/create-problem-type.component';
import { ViewProblemTypeComponent } from './components/view-problem-type/view-problem-type.component';

            ////////////////////    CUSTOMER  ////////////////////////////
//Home
import { HomeCustomerComponent } from './components/home-customer/home-customer.component';
//Request
import { ViewRequestCustomerComponent } from './components/view-request-customer/view-request-customer.component';
import { CreateRequestCustomerComponent } from './components/create-request-customer/create-request-customer.component';

            ////////////////////    SUPPORT DEPARTMENT  ////////////////////////////
//Home
import { HomeSupportDepartmentComponent } from './components/home-support-department/home-support-department.component';
//Request
import { ViewRequestSupportDepartmentComponent } from './components/view-request-support-department/view-request-support-department.component';
import { CreateRequestSupportDepartmentComponent } from './components/create-request-support-department/create-request-support-department.component';

            ////////////////////    LOG IN  ////////////////////////////
import { AuthGuard } from './auth/auth.guard';
import { AuthSupportGuard } from './auth/auth-support.guard';
import { AuthUserGuard } from './auth/auth-user.guard';

import { RequestService } from './services/request.service';

          ///////// EXTRAS /////////////

import { LoginComponent } from './components/login/login.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ConfigurationCustomerComponent } from './components/configuration-customer/configuration-customer.component';
import { ConfigurationSupportDepartmentComponent } from './components/configuration-support-department/configuration-support-department.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,

    ////////ADMIN////////////
    //User
    CreateUserComponent,
    ViewUserComponent,
    //Home
    HomeComponent,
    //Request
    CreateRequestComponent,
    ViewRequestComponent,
    //Department
    CreateDepartmentComponent,  
    ViewDepartmentComponent, 
    //Problem Type
    CreateProblemTypeComponent,
    ViewProblemTypeComponent,
    
    ////////CUSTOMER///////
    //Home
    HomeCustomerComponent,
    //Request
    ViewRequestCustomerComponent,
    CreateRequestCustomerComponent,

    ////////SUPPORT DEPARTMENT///////
    //Home
    HomeSupportDepartmentComponent,
    //Request
    ViewRequestSupportDepartmentComponent,
    CreateRequestSupportDepartmentComponent,

    //////////// EXTRAS /////////////
    LoginComponent,
    ConfigurationComponent,
    ConfigurationCustomerComponent,
    ConfigurationSupportDepartmentComponent,
    AboutUsComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthSupportGuard,AuthUserGuard,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
