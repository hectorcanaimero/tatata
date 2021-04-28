import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { YoutubeComponent } from './youtube.component';


@NgModule({
  declarations: [
    YoutubeComponent,
  ],
  exports: [
    YoutubeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,

  ]
})
export class HelperModule { }
