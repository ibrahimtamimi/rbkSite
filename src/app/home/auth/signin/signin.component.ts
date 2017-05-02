import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
useremail : String;
password : String;
  constructor() { }

  ngOnInit() {
  }
    onSubmit(){
      const user = {
        username: this.useremail,
        password: this.password
      }
      console.log(user)
  }
}
