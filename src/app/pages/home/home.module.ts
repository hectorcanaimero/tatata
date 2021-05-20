import { OfertasModule } from './../../widgets/ofertas/ofertas.module';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';

import { Widget1Module } from 'src/app/widgets/widget-1/widget-1.module';
import { Widget2Module } from 'src/app/widgets/widget-2/widget-2.module';
import { Widget3Module } from 'src/app/widgets/widget-3/widget-3.module';
import { Widget4Module } from 'src/app/widgets/widget-4/widget-4.module';

import { HomeComponent } from './home.component';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    Widget1Module,
    Widget2Module,
    Widget3Module,
    Widget4Module,
    OfertasModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
