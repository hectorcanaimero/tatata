import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AgendaComponent } from './agenda.component';



@NgModule({
  declarations: [AgendaComponent],
  exports: [AgendaComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class AgendaModule { }
