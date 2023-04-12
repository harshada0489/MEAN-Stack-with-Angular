import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ArithmeticOperationService } from './arithmetic-operation.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmeticOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
