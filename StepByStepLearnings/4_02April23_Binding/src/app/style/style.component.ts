import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  public Mycolor = "orange";

  public Isset = false;
  public myClass = "success";

  public Name = "____";

  public onSubmit()
  {
    this.Name="Submit button clicked... ";

  }
  public myActionNew(value : any)
  {
    console.log(value);
  }
}
