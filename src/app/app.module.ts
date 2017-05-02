import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { SigninComponent } from './home/auth/signin/signin.component';
import {AuthService} from './home/auth/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
  
  
])
  ],

  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
