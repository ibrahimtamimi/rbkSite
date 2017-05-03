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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthService} from './home/auth/service/auth.service';
import { FacebookLogInService} from './home/auth/service/facebook-log-in.service';
import { FacebookModule } from 'ngx-facebook';  
import { FacebookLogInComponent } from './home/auth/facebook-log-in/facebook-log-in.component';
      





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FacebookLogInComponent
  ],
  imports: [
    FacebookModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {path:'',component:FacebookLogInComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'facebook', component:FacebookLogInComponent }
  
  
])
  ],

  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},AuthService,FacebookLogInService],

  bootstrap: [AppComponent]
})
export class AppModule { }
