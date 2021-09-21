import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [GamesComponent],
  exports: [GamesComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class GamesModule { }
