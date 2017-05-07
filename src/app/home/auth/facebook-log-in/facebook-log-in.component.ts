import { Component, OnInit, NgZone} from '@angular/core';
import {FacebookLogInService} from '../service/facebook-log-in.service';
import { Http } from "@angular/http";
import { FacebookService, InitParams , LoginResponse } from 'ngx-facebook';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-log-in',
  templateUrl: './facebook-log-in.component.html',
  styleUrls: ['./facebook-log-in.component.css'],
   providers: [FacebookLogInService]
})

export class FacebookLogInComponent implements OnInit {
    name="";
	  isUser = false;
    id="";
    no = false;

  constructor(
  	private fb: FacebookService,
  	 private _ngZone: NgZone ,
    private _facebookService: FacebookLogInService,
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
  this.fb.logout().then(() => console.log('Logged out!'));
        }


getUserInfo(){
this.fb.login().then((response) => {
  var promise = this.fb.api('/me');
  promise.then((res)=> {
      this.id = res.id;
      this.name = res.name;
      this.isUser = true ;

      this.auth.signin({id:this.id , userName:this.name}).subscribe(data => {
      if(data.token){ // test if the data from backend that has token ...
        
        this.auth.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...

        }else {

          this.router.navigate(['/signup']); // if the user is not in DB first go to signup page to registe ...
        }
      
     });
      console.log(res);

    });
  console.log(response);

});
}


 //  login(){
	// 	var self = this;
	// 	fb.login(function(response) {
	// 	    if (response.authResponse) {
	// 	        fb.api('/me', function(response) {
	// 	          	self._ngZone.run(() => {
	// 			        self.name = response.name;
	// 			        self.isUser = true
	// 		        });
	// 	        });
	// 	    }else{
	// 	        console.log('User cancelled login or did not fully authorize.');
	// 	    }
	// 	});
	// }

}



