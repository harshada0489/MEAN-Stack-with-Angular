import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{

  constructor(public sobj : StringService)
  {}

  mixedString : string = "HeLLo WorLD";

  capsCount : number = 0;

  ngOnInit(): void {
    this.capsCount = this.sobj.CountCapital(this.mixedString);  
  }
}
