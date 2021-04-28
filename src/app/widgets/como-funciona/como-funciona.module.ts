import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ComoFuncionaComponent } from './como-funciona.component';

@NgModule({
  declarations: [ComoFuncionaComponent],
  exports: [ComoFuncionaComponent],
  imports: [
  CommonModule,
    MDBBootstrapModule,
  ]
})

export class ComoFuncionaModule { }
