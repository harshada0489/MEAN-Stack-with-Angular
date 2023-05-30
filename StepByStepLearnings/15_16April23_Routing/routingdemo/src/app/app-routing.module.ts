import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'first', component : FirstComponent},
  {path: 'second', component : SecondComponent},
  {path: 'third', component : ThirdComponent},
  {path:'', component : FirstComponent}, //default route
  {path: '**' , component: PagenotfoundComponent}, //wild card (should be at the end)
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
