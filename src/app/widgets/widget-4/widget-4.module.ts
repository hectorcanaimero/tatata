import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Widget4Component } from './widget-4.component';
import { PostComponent } from './post/post.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [Widget4Component, PostComponent],
  exports: [Widget4Component],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class Widget4Module { }
