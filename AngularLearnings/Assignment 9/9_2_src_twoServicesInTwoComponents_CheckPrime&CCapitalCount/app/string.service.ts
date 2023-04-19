import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }



  public CountCapital(str : string) : number
  {
    
    let capitalCount : number = 0; 

    let Cnt : number = 0;
    for(Cnt= 0 ; Cnt<str.length; Cnt++)
    {
      let charAscii = str.charCodeAt(Cnt);
      if(charAscii >= 65  && charAscii <= 90)
      {
        capitalCount = capitalCount + 1; 
      }
    }
    return capitalCount;
  }
}
