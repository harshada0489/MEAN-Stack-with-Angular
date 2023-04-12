import { Component } from '@angular/core';
import { ArithmeticOperationService } from '../arithmetic-operation.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
   public ans : any = 0;

   constructor( public aObj : ArithmeticOperationService)
   {

   }

   public ExpressionOperation(expression : string) : void
   {
    console.log("Inside Expression");
    var expArr : string [] ;
    
    if(expression.includes('+')){
      expArr = expression.split('+', 2);
      this.ans = this.aObj.addition(Number(expArr[0]), Number(expArr[1]));
    }
    else if(expression.includes('-')){
      expArr = expression.split('-', 2);
      this.ans = this.aObj.subtraction(Number(expArr[0]), Number(expArr[1]));
    }

    else if(expression.includes('/')){
      expArr = expression.split('/', 2);
      this.ans = this.aObj.division(Number(expArr[0]), Number(expArr[1]));
    }
    else if(expression.includes('*')){
      expArr = expression.split('*', 2);
      this.ans = this.aObj.multiplication(Number(expArr[0]), Number(expArr[1]));
    }
    else{
      this.ans ="Operation other that +, -, / , * are not supported by application";
    }
   }

}
