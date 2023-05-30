import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public Batches = ["PPA", "LB", "Angular", "Python", "LSP"];
  public Fees = [18000,18200,18300,20000,14000];
  
}
