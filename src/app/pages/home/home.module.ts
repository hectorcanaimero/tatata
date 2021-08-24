import { AppOldModule } from './../../widgets/app-old/app-old.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home.component';

import { BlogModule } from '../../widgets/blog/blog.module';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { OfertasModule } from '../../widgets/ofertas/ofertas.module';
import { CondorEmCasaModule } from './../../widgets/condor-em-casa/condor-em-casa.module';
import { FilterInstagramModule } from './../../widgets/filter-instagram/filter-instagram.module';
import { CondorMaisProximoModule } from './../../widgets/condor-mais-proximo/condor-mais-proximo.module';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BlogModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    AppOldModule,
    OfertasModule,
    CondorEmCasaModule,
    MDBBootstrapModule,
    FilterInstagramModule,
    CondorMaisProximoModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
