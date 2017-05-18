import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SigninComponent } from '../signin/signin.component';
import {Router} from '@angular/router';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { emailValidator , matching } from '../validators';
import { FacebookLogInComponent } from '../facebook-log-in/facebook-log-in.component';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  private user : Object;
  registerForm: FormGroup;
  signinCom: SigninComponent;
  fblogin:FacebookLogInComponent;
  constructor( private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { 
    this.signinCom = new SigninComponent(router, authService, formBuilder);
  }
  
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


  addNewUser(value: Object) { // function to add new user to DB ...
    this.user=value;
  	this.authService.signup({user:this.user}).subscribe(data => {
      if(data){///need to refactor depend on the data from the back end 
        this.signinCom.submitSignIn(value);
        this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
        this.router.navigate(['/uhome']);
      }else {
        this.router.navigate(['/signup']);
      }
    });
  }//end of signup function ...
   loginFb(){
     this.fblogin.getUserInfo();
   }

    
}//end of the class ...



