import { Component } from '@angular/core';

@Component({
  selector: 'app-strintr',
  templateUrl: './strintr.component.html',
  styleUrls: ['./strintr.component.css']
})
export class STRINTRComponent 
{
  public Name = "Harshada";

  DisplayFunction()
  {
    return "Inside Display Function";
  }
}
