import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticOperationService {

  public addition(no1 : number , no2 : number) : number
  {
    return no1+no2;
  }

  public subtraction(no1 : number , no2 : number) : number
  {
    return no1-no2;
  }

  public division(no1 : number , no2 : number) : any
  {
    if(no2 == 0){
      return "Cannot be divided by 0. Invalid Expression"
    }
    return (no1/no2);
  }

  public multiplication(no1 : number , no2 : number) : number
  {
    return no1*no2;
  }


}
