import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DuvidasComponent } from './duvidas.component';



@NgModule({
  declarations: [DuvidasComponent],
  exports: [DuvidasComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class DuvidasModule { }
