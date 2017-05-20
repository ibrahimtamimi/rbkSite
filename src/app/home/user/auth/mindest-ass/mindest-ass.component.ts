import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindest-ass',
  templateUrl: './mindest-ass.component.html',
  styleUrls: ['./mindest-ass.component.css']
})
export class MindestAssComponent implements OnInit {
   public qusArr=["do as you would be done by!","As you saw , so will you reap!","life what ever will continue !!!"];
  constructor() { }

  ngOnInit() {
  	console.log(this.qusArr);
  }

  
}
