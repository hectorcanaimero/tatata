import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Widget2Component } from './widget-2.component';

@NgModule({
  declarations: [Widget2Component],
  exports: [Widget2Component],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class Widget2Module { }
