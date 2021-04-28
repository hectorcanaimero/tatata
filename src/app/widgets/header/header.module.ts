import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MenuModule } from '../menu/menu.module';
import { HelperModule } from '../helper/helper.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    MenuModule,
    CommonModule,
    HelperModule,
    MDBBootstrapModule
  ]
})
export class HeaderModule { }
