import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticiparComponent } from './participar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [ParticiparComponent],
  exports: [ParticiparComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class ParticiparModule { }
