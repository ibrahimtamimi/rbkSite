import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signUp(){
  	this.router.navigate(['/signup']);
  }

}
