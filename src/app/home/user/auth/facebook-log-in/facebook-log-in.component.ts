import { Component, OnInit, NgZone} from '@angular/core';
import { Http } from "@angular/http";
import { FacebookService, InitParams , LoginResponse } from 'ngx-facebook';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-log-in',
  templateUrl: './facebook-log-in.component.html',
  styleUrls: ['./facebook-log-in.component.css']
})

export class FacebookLogInComponent implements OnInit {
    name="";
	  isUser = false;
    id="";
    email="";
    no = false;
    firstName="";
    lastName="";

  constructor(
  	private fb: FacebookService,
  	private _ngZone: NgZone ,
    private auth:AuthService,
    private http:Http,
    private router: Router
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

  logOut(): void {
    this.auth.logout();
        }


getUserInfo(){
   this.fb.login().then((response) => {
    const promise = this.fb.api('/me');
    const emp=" ";
    promise.then((res)=> {
      this.id = res.id;
      this.name = res.name;
      this.email=res.email;
      this.isUser = true ;
      this.firstName=this.name.slice(0,this.name.indexOf(emp));
      this.lastName=this.name.slice(this.name.indexOf(emp));
   console.log(this.email)
      this.auth.facebookLogin({FbID:this.id ,firstName:this.firstName ,lastName:this.lastName}).subscribe(data => {
      if(data.token){ // test if the data from backend that has token ...
        console.log("vvvvvvvvvvv")
        
        this.auth.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...

         this.router.navigate(['/uhome']);
        }else {
           console.log("error")
          this.router.navigate(['/signup']); // if the user is not in DB first go to signup page to registe ...
        }
      
     });
      console.log(res);

    });
  console.log(response);

   });
  }

}



