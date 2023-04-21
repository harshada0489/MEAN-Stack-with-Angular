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

   public ExpressionOperation(expression1 : string, operator : string, expression2 : string ) : void
   {
    console.log("Inside Expression");
    var expArr : string [] ;
    
    if(operator.includes('+')){ 
      this.ans = this.aObj.addition(Number(expression1), Number(expression2));
    }
    else if(operator.includes('-')){
      this.ans = this.aObj.subtraction(Number(expression1), Number(expression2));
    }

    else if(operator.includes('/')){
      this.ans = this.aObj.division(Number(expression1), Number(expression2));
    }
    else if(operator.includes('*')){
      this.ans = this.aObj.multiplication(Number(expression1), Number(expression2));
    }
    else{
      this.ans ="Operation other that +, -, / , * are not supported by application";
    }
   }

}
