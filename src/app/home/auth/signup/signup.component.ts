import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { emailValidator , matching } from '../validators';



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
   private user : any;
  
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
      {validator:matching ('email','conEmail','password', 'confirmPassword')},
     
     )}
  // addNewUser(){
  // 	const user={
  // 	firstName  : this.firstName,
  //   lastName   : this.lastName,
  //   email      : this.email,
  //   password   : this.password
    
  // 	}

  addNewUser(value: Object){
     this.user = value
console.log(this);
      
  }
        this.authService.signup(this.user).subscribe(data => {

      if(data){
        console.log(data)
        
        } else {
    
          this.router.navigate(['/signup']);
        }
        });
}
  



 
  



