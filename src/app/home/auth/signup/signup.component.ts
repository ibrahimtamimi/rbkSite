import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	firstName  : String;
    lastName   : String;
    email      : String;
    conEmail   : String;
    password   : String;
    conPassword: String;


  constructor( private authService : AuthService 
              ) { }

  ngOnInit() {
  }
  addNewUser(){
  	const user={
  	firstName  : this.firstName,
    lastName   : this.lastName,
    email      : this.email,
    conEmail   : this.conEmail,
    password   : this.password,
    conPassword: this.conPassword	
  	}
  	
  	 this.authService.signup(user).subscribe(data => {

      if(data){
         console.log(user);
        
        } else {
          console.log("error");
        }
        });
  }

}
