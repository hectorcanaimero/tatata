import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Widget1Component } from './widget-1.component';

@NgModule({
  declarations: [Widget1Component],
  exports: [Widget1Component],
  imports: [
  CommonModule,
    MDBBootstrapModule,
  ]
})

export class Widget1Module { }
