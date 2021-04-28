import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ClubeCondorComponent } from './clube-condor.component';

@NgModule({
  declarations: [ClubeCondorComponent],
  exports: [ClubeCondorComponent],
  imports: [
  CommonModule,
    MDBBootstrapModule
  ]
})
export class ClubeCondorModule { }
