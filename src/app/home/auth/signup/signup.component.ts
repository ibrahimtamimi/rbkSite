import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { emailValidator, matchingPasswords , matchingEmails } from '../validators';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	  // firstName  : String;
    // lastName   : String;
    // email      : String;
    // conEmail   : String;
    // password   : String;
    // conPassword: String;
  

  constructor( private authService : AuthService , private router:Router,private formBuilder: FormBuilder
                ) { }
registerForm: FormGroup;
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      conEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]},
     {validator: matchingPasswords('password', 'confirmPassword'),
      validator2:matchingEmails ('email','conEmail')}
     
     )}
  // addNewUser(){
  // 	const user={
  // 	firstName  : this.firstName,
  //   lastName   : this.lastName,
  //   email      : this.email,
  //   password   : this.password
    
  // 	}

  addNewUser(value: Object){
     
      console.log(value)
  }

  	//console.log(user);
  // 	 this.authService.signup().subscribe(data => {

  //     if(data){
  //        console.log(data);
        
  //        } else {
  //         this.router.navigate(['/signup']);
  //        }
  //      });
    
  }


