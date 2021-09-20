import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [QuizComponent],
  exports: [QuizComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class QuizModule { }
