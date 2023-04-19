import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child/child.component';
import { StringService } from './string.service';
import { NumberService } from './number.service';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [StringService, NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
