import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLearnings';

  //parent to child message passing
  public Message= "Hello from Parent";


  //child to parent message fetching variable
  public MessageFromChild = "";


}
