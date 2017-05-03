import { Component, OnInit } from '@angular/core';
import { emailValidator } from '../validators';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

constructor(private formBuilder: FormBuilder) {}
useremail : String;
password : String;
registerForm: FormGroup;

 

   ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
    });
  }

    submitsignin(value: Object){
     
      console.log(value)
  }
}
