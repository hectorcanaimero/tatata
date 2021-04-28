import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CompreOnlineComponent } from './compre-online.component';

@NgModule({
  declarations: [CompreOnlineComponent],
  exports: [CompreOnlineComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class CompreOnlineModule { }
