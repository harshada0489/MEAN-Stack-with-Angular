import { Component } from '@angular/core';

@Component({
  selector: 'app-user-defined',
  templateUrl: './user-defined.component.html',
  styleUrls: ['./user-defined.component.css']
})
export class UserDefinedComponent {

  public strName : string = "";

   public fun()
  {
    return "fun method called";
  }
}
