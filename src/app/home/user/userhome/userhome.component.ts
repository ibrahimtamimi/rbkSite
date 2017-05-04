import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
testflag= false;
but1flag = true;
bankName:string;

tests: Object[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.tests=[{id:"123",name:"btata"},{id:"333",name:"lol"}];
        // 'bank' is the name of the route parameter
    this.bankName = this.route.snapshot.params['bank'];
  }

  testshow() {
    this.testflag = !this.testflag;
   
    

  }
  
}
