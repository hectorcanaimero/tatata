import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ScrollToModule.forRoot(),
  ]
})
export class MenuModule { }
