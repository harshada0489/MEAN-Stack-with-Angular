import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() public MyEvent = new EventEmitter();

  public DisplayMessage(userMessage : string)
  {
    this.MyEvent.emit(userMessage);
  }

}
