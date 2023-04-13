import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  public name : string = "Please click the button";

  public fun()
  {
    this.name = "After clicking. Educating for better tomorrow"
  }
}
