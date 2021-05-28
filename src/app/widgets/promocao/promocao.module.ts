import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocaoComponent } from './promocao.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [PromocaoComponent],
  exports: [PromocaoComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class PromocaoModule { }
