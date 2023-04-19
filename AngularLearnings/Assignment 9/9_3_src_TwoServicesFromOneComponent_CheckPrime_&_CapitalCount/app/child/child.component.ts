import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Child1Component implements OnInit{

  constructor(public nobj : NumberService, public sobj : StringService)
  {}

  isPrimeValue : boolean = false;
  Nos : number = 13;

  mixedString : string = "HeLLo WorLDD";
  capsCount : number = 0;

  ngOnInit(): void 
  {
    this.isPrimeValue = this.nobj.ChkPrime(this.Nos);
    this.capsCount = this.sobj.CountCapital(this.mixedString);
  }
}
