import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';

import { OfertasComponent } from './ofertas.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    OfertasComponent,
    ProductComponent
  ],
  exports: [OfertasComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NgxPaginationModule,
  ]
})
export class OfertasModule { }
