import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AplicativoComponent } from './aplicativo.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AplicativoComponent],
  exports: [AplicativoComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class AplicativoModule { }
