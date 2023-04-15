import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //parent to child message passing 
  @Input() public MessageFromParent="";


//child to parent message passing 
   public ChildMessage = "Hello from child";
   @Output() public Myevent = new EventEmitter();
   public SendMessage()
   {
    this.Myevent.emit(this.ChildMessage);
   }
   
}
