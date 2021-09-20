import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DdvComponent } from './ddv.component';



@NgModule({
  declarations: [DdvComponent],
  exports: [DdvComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class DdvModule { }
