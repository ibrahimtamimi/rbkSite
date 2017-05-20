import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindest-ass',
  templateUrl: './mindest-ass.component.html',
  styleUrls: ['./mindest-ass.component.css']
})
export class MindestAssComponent implements OnInit {
   public qusArr=["a","b","d"];
  constructor() { }

  ngOnInit() {
  	console.log(this.qusArr);
  }

  
}
