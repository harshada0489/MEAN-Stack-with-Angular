import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

  name = "MarveLLous InfosystEms";
  today = new Date();
  value = 32.8986976;
  Institute = {
    "name" : "Marvellous",
    "location" : "pune"
  };
}
