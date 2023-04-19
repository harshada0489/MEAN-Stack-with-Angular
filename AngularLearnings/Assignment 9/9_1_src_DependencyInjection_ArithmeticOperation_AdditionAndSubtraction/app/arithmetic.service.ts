import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public addition(No1 : number, No2 : number)
  {
    return No1 + No2;
  }

  public subtraction(No1 : number, No2 : number)
  {
    return No1 - No2;
  }
}
