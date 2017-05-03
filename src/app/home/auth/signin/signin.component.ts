import { Component, OnInit } from '@angular/core';

import { emailValidator } from '../validators';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
   private user : Object;


constructor(private formBuilder: FormBuilder , private authService:AuthService , private router: Router) {}

registerForm: FormGroup;

 

   ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
    });
  }

    submitSignIn(value: Object){
     this.user=value;
      console.log(value)
  
      this.authService.signin({user:this.user}).subscribe(data => {
      if(data.token){ // test if the data from backend that has token ...
        
      this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
       this.router.navigate(['/uhome']);
        }else {
          this.router.navigate(['/signup']); // if the user is not in DB first go to signup page to registe ...
        }
      
     });
  }

}




  // ngOnInit() {}

  // logIn(){//function will call when the user logIn...

  //   const user = {
  //          email   : this.useremail,
  //          password: this.password
  //     }
  

  //   this.auth.signin(user).subscribe(data => {
  //     if(data.token){ // test if the data from backend that has token ...
        
  //       this.auth.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...

  //       }else {

  //         this.router.navigate(['/signup']); // if the user is not in DB first go to signup page to registe ...
  //       }
      
  //    });

  // }//end of logIn function...

//the end of the class...

