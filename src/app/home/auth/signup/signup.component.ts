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

   private user : Object;
  
   constructor( private authService : AuthService , private router:Router,private formBuilder: FormBuilder
                ) { }
registerForm: FormGroup;
  ngOnInit() {//form for validate the input of an user while signing up 
      this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      conEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]},
      {validator:matching ('email','conEmail','password', 'confirmPassword')},
     
     )}


  addNewUser(value:Object){ // function to add new user to DB ...
    this.user=value;

console.log(this.user)
  	 this.authService.signup(this.user).subscribe(data => {


      if(data.token){
        console.log(data)
       this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
       this.router.navigate(['/uhome']);

        } else {
    
          this.router.navigate(['/signup']);
        }
        });
}//end of signup function ...
  

    
  }//end of the class ...



