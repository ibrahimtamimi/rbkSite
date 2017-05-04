import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/user/auth/signup/signup.component';
import { SigninComponent } from './home/user/auth/signin/signin.component';
import { AuthService} from './home/user/auth/service/auth.service';
import { UserhomeComponent } from './home/user/userhome/userhome.component';

import { EmployeehomeComponent } from './home/employee/employeehome/employeehome.component';
import { SigninemployeeComponent } from './home/employee/signinemployee/signinemployee.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    UserhomeComponent,
    EmployeehomeComponent,
    SigninemployeeComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
  {path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'uhome', component: UserhomeComponent },
  { path: 'ehome', component: EmployeehomeComponent },
  { path: 'esignin', component: SigninemployeeComponent }
  
  
  
  
  
])
  ],



  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
