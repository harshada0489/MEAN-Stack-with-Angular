import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h1>Inside second Component</h1>
  <h2>Concept of Inline in Angular</h2>
  `,
  styles: [
  `
  h1{
    color : red
  }
  h2
  {
    color : green
  }
  `
  ]
})
export class SecondComponent {

}
