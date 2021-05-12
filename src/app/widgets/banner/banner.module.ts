import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BannerComponent } from './banner.component';



@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class BannerModule { }
