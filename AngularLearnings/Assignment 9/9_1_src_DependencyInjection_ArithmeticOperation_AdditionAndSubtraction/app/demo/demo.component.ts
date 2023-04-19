import { Component , OnInit} from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  constructor(public aobj : ArithmeticService)
  {}
  
  additionValue : number = 0;
  subtractionValue : number = 0;

  ngOnInit(): void {
    this.additionValue = this.aobj.addition(10,20);
    this.subtractionValue = this.aobj.subtraction(20,9);
  }
}
