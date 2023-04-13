import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwobuttonsComponent } from './twobuttons/twobuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TwobuttonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
