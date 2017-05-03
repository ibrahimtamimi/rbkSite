import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FacebookLogInService {

  constructor() { 
   // if (!window.fbAsyncInit) {
   //    console.log('define');
   //    window.fbAsyncInit = function() {
   //      FB.init({
   //        appId: "735660593275033",
   //        status: true,
   //        cookie: true, 
   //        xfbml: true,
   //        version: 'v2.9'
   //      });
   //    };
   //  }
  }
 // loadAndInitFBSDK(): Observable{
 //    var js,
 //      id = 'facebook-jssdk',
 //      ref = document.getElementsByTagName('script')[0];

 //    if (document.getElementById(id)) {
 //      return;
 //    }

 //    js = document.createElement('script');
 //    js.id = id;
 //    js.async = true;
 //    js.src = "//connect.facebook.net/en_US/sdk.js";

 //    ref.parentNode.insertBefore(js, ref);
 //  }

}






  
