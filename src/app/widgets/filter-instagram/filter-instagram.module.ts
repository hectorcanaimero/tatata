import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FilterInstagramComponent } from './filter-instagram.component';


@NgModule({
  declarations: [FilterInstagramComponent],
  exports: [FilterInstagramComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class FilterInstagramModule { }
