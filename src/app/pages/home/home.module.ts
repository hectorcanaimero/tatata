import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home.component';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { OfertasModule } from 'src/app/widgets/ofertas/ofertas.module';
import { ClubeCondorModule } from 'src/app/widgets/clube-condor/clube-condor.module';
import { CondorEmCasaModule } from 'src/app/widgets/condor-em-casa/condor-em-casa.module';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    OfertasModule,
    ClubeCondorModule,
    CondorEmCasaModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
