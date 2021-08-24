import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CondorEmCasaComponent } from './condor-em-casa.component';

@NgModule({
  declarations: [CondorEmCasaComponent],
  exports: [CondorEmCasaComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class CondorEmCasaModule { }
