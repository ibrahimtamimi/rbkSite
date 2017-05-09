import { Component, OnInit, NgZone} from '@angular/core';
import { Http } from "@angular/http";
import { FacebookService, InitParams , LoginResponse } from 'ngx-facebook';
import { EAuthService} from '../eAuth/e-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-fb-login',
  templateUrl: './employee-fb-login.component.html',
  styleUrls: ['./employee-fb-login.component.css']
})
export class EmployeeFbLoginComponent implements OnInit {

 

    name="";
    isUser = false;
    id="";
    email="";
    no = false;
    firstName="";
    lastName="";

  constructor(

  	private fb     : FacebookService,
  	private _ngZone: NgZone ,
    private auth   : EAuthService,
    private http   : Http,
    private router : Router

    ) { 
 
 let initParams: InitParams = {
 	      appId: "820622594754755",
          status: true,
          cookie: true, 
          xfbml: true,
          version: 'v2.9'
    };

    fb.init(initParams);

  }
   
  ngOnInit() { }

  loginWithFacebook(): void { 
     this.fb.login()
     .then((response: LoginResponse) => console.log('Logged in', response))
     .catch(e => console.error('Error logging in'));
        }

  getEmpInfo(){

   this.fb.login().then((response) => {
    const promise = this.fb.api('/me'); //function give data from fb...
    const emp=" ";
    promise.then((res)=> {
       //variables to save the data that come from fb ...

      this.id = res.id;
      this.name = res.name;
      this.email=res.email;
      this.isUser = true ;
      this.firstName=this.name.slice(0,this.name.indexOf(emp));
      this.lastName=this.name.slice(this.name.indexOf(emp));

   
      this.auth.eFacebookLogin({ FbID:this.id , userName:this.name , firstName:this.firstName , lastName:this.lastName }).subscribe(data => {
      
      if(data.token){ // test if the data from backend that has token ...
        this.auth.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
        this.router.navigate(['/ehome']);
         
       }else {
         
         this.auth.eFacebookSignup({ FbID:this.id , userName:this.name , firstName:this.firstName , lastName:this.lastName }).subscribe(data => {
           
           if(data){ // test if the data from backend that has token ...
           console.log("insid the sigin")
           this.auth.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
           this.router.navigate(['/ehome']); 

           }else {
           console.log("error")
           this.router.navigate(['/esignin']); // if the user is not in DB first go to signup page to registe ...
             }  
      
        });//close of the signup ...

      }// else close..

    });//close of first subscribe ...
console.log(res)
   });//close of promise ...

  })//close of fb.login...

 }// close of the function ...

 logOut(): void {
    this.auth.logout();
        }//logout function from fb && all the app...



}
