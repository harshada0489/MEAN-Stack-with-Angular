import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit{

  constructor(public nobj : NumberService)
  {}

  isPrimeValue : boolean = false;
  Nos : number = 11;
  ngOnInit(): void 
  {
    
    this.isPrimeValue = this.nobj.ChkPrime(this.Nos);
  }
}
