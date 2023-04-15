import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLearnings';

  public tname : string = "";

  lengthVariable(event : any)
  {
    this.tname = (event.target as HTMLInputElement).value;
  }
}
