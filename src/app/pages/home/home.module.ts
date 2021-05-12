import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BannerModule } from 'src/app/widgets/banner/banner.module';
import { AgendaModule } from 'src/app/widgets/agenda/agenda.module';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { DuvidasModule } from 'src/app/widgets/duvidas/duvidas.module';
import { ParallaxModule } from 'src/app/widgets/parallax/parallax.module';

import { HomeComponent } from './home.component';
const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    AgendaModule,
    BannerModule,
    DuvidasModule,
    ParallaxModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
