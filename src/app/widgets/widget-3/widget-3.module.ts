import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Widget3Component } from './widget-3.component';

@NgModule({
  declarations: [Widget3Component],
  exports: [Widget3Component],
  imports: [
    SwiperModule,
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class Widget3Module { }
