import { Component, OnInit } from '@angular/core';

import { emailValidator } from '../validators';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  private user : Object;
   
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }
  
  signinForm: FormGroup;

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
    });
  }

  

  submitSignIn(value: Object) {
      console.log(value)
      this.user=value;
      this.authService.signin(this.user).subscribe(data => {
        if(data.isUser === false){ // test if the data from backend that has token ...
         console.log(data) // if the user is not in DB first go to signup page to registe ...
        }else if(data.isValidPass === false){
          console.log(data) //send msg wrong pass
        }else{
          this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
          this.router.navigate(['/uhome']);
        }
      });
  }

}
