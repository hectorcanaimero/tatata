import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax.component';



@NgModule({
  declarations: [ParallaxComponent],
  exports: [ParallaxComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class ParallaxModule { }
