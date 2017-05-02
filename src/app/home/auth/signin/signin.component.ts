import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
useremail : String;
password : String;
  constructor(private auth:AuthService , private router: Router) { }

  ngOnInit() {
  }
    logIn(){

      const user = {
        email: this.useremail,
        password: this.password
      }

      this.auth.signin(user).subscribe(data => {
      if(data.token){
        console.log(data)
        this.auth.storeInLocalStorage(data.token , data.id , data.userName);
        }else {
          this.router.navigate(['/signup']);
        }
      
     });
   }
}
