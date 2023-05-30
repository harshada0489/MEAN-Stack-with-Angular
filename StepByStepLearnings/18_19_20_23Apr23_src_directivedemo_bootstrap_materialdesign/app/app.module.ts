import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDirective } from './demo.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgIf,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
