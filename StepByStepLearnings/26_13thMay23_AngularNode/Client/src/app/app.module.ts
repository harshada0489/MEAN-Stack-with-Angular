import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; // Import 
import { DemoService } from './demo.service';           //Import
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Added
  ],
  providers: [DemoService], //Added
  bootstrap: [AppComponent]
})
export class AppModule { }
