import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

const routes: Routes = [
  {path : '', component: TechnologiesComponent},   //default route
  {path : 'technologies', component: TechnologiesComponent},
  {path : 'books' , component: BooksComponent},
  {path : '**', component : WrongchoiceComponent }  // wild card route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
