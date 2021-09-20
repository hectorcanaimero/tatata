import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ParceirosComponent } from './parceiros.component';
import { LottieModule } from 'ngx-lottie';



@NgModule({
  declarations: [ParceirosComponent],
  exports: [ParceirosComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    LottieModule
  ]
})
export class ParceirosModule { }
