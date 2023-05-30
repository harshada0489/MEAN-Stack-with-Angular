import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{  
  message : any;

  constructor(private service : DemoService)
  {

  }

  ngOnInit(): void {
    this.service.batches().subscribe(data=>{
      this.message = data;
    })
  }

}
