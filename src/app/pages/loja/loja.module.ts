import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LojaComponent } from './loja.component';

import { BlogModule } from '../../widgets/blog/blog.module';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { OfertasModule } from '../../widgets/ofertas/ofertas.module';
import { ClubeCondorModule } from '../../widgets/clube-condor/clube-condor.module';
import { CompreOnlineModule } from '../../widgets/compre-online/compre-online.module';
import { ComoFuncionaModule } from 'src/app/widgets/como-funciona/como-funciona.module';

const app: Routes = [{ path: ':slug', component: LojaComponent }];

@NgModule({
  declarations: [LojaComponent],
  imports: [
    BlogModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    OfertasModule,
    ClubeCondorModule,
    ComoFuncionaModule,
    CompreOnlineModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class LojaModule { }
