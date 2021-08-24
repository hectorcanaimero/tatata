import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PromocaoTwoComponent } from './promocao-two.component';

@NgModule({
  declarations: [PromocaoTwoComponent],
  exports: [PromocaoTwoComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class PromocaoTwoModule { }
