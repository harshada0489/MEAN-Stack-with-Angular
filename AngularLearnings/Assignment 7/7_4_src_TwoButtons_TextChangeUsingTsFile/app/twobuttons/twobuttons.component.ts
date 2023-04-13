import { Component } from '@angular/core';

@Component({
  selector: 'app-twobuttons',
  templateUrl: './twobuttons.component.html',
  styleUrls: ['./twobuttons.component.css']
})
export class TwobuttonsComponent {
  public name : string = "I am A string";

  public upperCase()
  {
    this.name = this.name.toLocaleUpperCase();
  }

  public lowerCase()
  {
    this.name = this.name.toLowerCase();
  }
}
