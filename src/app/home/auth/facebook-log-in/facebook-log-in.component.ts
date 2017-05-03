import { Component, OnInit, NgZone} from '@angular/core';
import {FacebookLogInService} from '../service/facebook-log-in.service';
import { FacebookService, InitParams , LoginResponse} from 'ngx-facebook';

@Component({
  selector: 'app-facebook-log-in',
  templateUrl: './facebook-log-in.component.html',
  styleUrls: ['./facebook-log-in.component.css'],
   providers: [FacebookLogInService]
})
export class FacebookLogInComponent implements OnInit {
    name=""
	isUser = false
  constructor(
  	private fb: FacebookService,
  	 private _ngZone: NgZone ,
    private _facebookService: FacebookLogInService
    ) { 
  
 let initParams: InitParams = {
 	       appId: "771140893063185",
          status: true,
          cookie: true, 
          xfbml: true,
          version: 'v2.9'
    };
    fb.init(initParams);

  }
   
  ngOnInit() {
  // 	this._facebookService.loadAndInitFBSDK(); 
  // 	this.fb.login()
  // .then((response: LoginResponse) => console.log('Logged in', response))
  // .catch(e => console.error('Error logging in'));
  }
  loginWithFacebook(): void {
 
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
 
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



