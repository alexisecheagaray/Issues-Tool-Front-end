import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/////////// LOGIN ///////////
import { AuthGuard } from './auth/auth.guard';
import { AuthSupportGuard } from './auth/auth-support.guard';
import { AuthUserGuard } from './auth/auth-user.guard';

import { LoginComponent } from './components/login/login.component';

/////////  EXTRAS ///////////
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ConfigurationCustomerComponent } from './components/configuration-customer/configuration-customer.component';
import { ConfigurationSupportDepartmentComponent } from './components/configuration-support-department/configuration-support-department.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

              ////////////////////    ADMIN  ////////////////////////////
//User
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
//Home
import { HomeComponent } from './components/home/home.component';
//Department
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { ViewDepartmentComponent } from './components/view-department/view-department.component';
//Request
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';

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


const routes: Routes = [

  ////////////////////    ADMIN  //////////////////////////// 
  //Home
  { path: 'home',               component: HomeComponent,               canActivate:[AuthGuard]}, 
  //Users
  { path: 'create-user',        component: CreateUserComponent,         canActivate:[AuthGuard]},
  { path: 'view-user',          component: ViewUserComponent,           canActivate:[AuthGuard]},

  //Department
  { path: 'create-department',  component: CreateDepartmentComponent,   canActivate:[AuthGuard]},
  { path: 'view-department',    component: ViewDepartmentComponent,     canActivate:[AuthGuard]},

  //Request
  { path: 'create-request',     component: CreateRequestComponent,      canActivate:[AuthGuard]},
  { path: 'view-request',       component: ViewRequestComponent,        canActivate:[AuthGuard]},

  //Problem Type
  { path: 'create-problem-type', component: CreateProblemTypeComponent, canActivate:[AuthGuard]},
  { path: 'view-problem-type',   component: ViewProblemTypeComponent,   canActivate:[AuthGuard]},
  
  //Extras
  { path: 'login',                  component: LoginComponent},
  { path: 'about-us',               component: AboutUsComponent},
  { path: 'configuration',          component: ConfigurationComponent,          canActivate:[AuthGuard]},
  { path: 'configuration-customer', component: ConfigurationCustomerComponent,  canActivate: [ AuthUserGuard ]},
  { path: 'configuration-support-department', component: ConfigurationSupportDepartmentComponent, canActivate: [AuthSupportGuard]},
  { path: 'forgot-password',        component: ForgotPasswordComponent},
  
  ////////////////////    CUSTOMER  ////////////////////////////
  //Home
  { path: 'home-customer',       component: HomeCustomerComponent,              canActivate: [ AuthUserGuard ]},
  //Request Customer
  { path: 'view-request-customer', component: ViewRequestCustomerComponent,     canActivate: [ AuthUserGuard ]},
  { path: 'create-request-customer', component: CreateRequestCustomerComponent, canActivate: [ AuthUserGuard ]},

  ////////////////////    SUPPORT DEPARTMENT  ////////////////////////////
  //Home
  { path: 'home-support-department', component: HomeSupportDepartmentComponent,                     canActivate:[AuthSupportGuard]},
  //Request Support Department
  { path: 'view-request-support-department', component: ViewRequestSupportDepartmentComponent,      canActivate:[AuthSupportGuard]},
  { path: 'create-request-support-department', component: CreateRequestSupportDepartmentComponent,  canActivate:[AuthSupportGuard]},
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
