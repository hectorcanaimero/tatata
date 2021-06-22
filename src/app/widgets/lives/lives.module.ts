import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivesComponent } from './lives.component';



@NgModule({
  declarations: [LivesComponent],
  exports: [LivesComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class LivesModule { }
