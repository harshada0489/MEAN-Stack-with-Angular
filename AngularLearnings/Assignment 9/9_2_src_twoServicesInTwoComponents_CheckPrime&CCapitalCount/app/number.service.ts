import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(Num : number) : boolean
  {
    let flag : boolean = false

    let Cnt = 0;

    for(Cnt = 2; Cnt <= Num/2; Cnt++)
    {
        if((Num % Cnt) == 0)
        {
            flag = true
            break
        }
    }
    return !flag;
  }
}
