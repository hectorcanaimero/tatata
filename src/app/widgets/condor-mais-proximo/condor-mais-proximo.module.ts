import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CondorMaisProximoComponent } from './condor-mais-proximo.component';


@NgModule({
  declarations: [CondorMaisProximoComponent],
  exports: [CondorMaisProximoComponent],
  imports: [
    FormsModule,
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class CondorMaisProximoModule { }
