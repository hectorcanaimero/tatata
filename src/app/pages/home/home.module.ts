import { LivesModule } from './../../widgets/lives/lives.module';
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
import { PromocaoModule } from './../../widgets/promocao/promocao.module';
import { PromocaoTwoModule } from './../../widgets/promocao-two/promocao-two.module';
import { AplicativoModule } from './../../widgets/aplicativo/aplicativo.module';
import { CondorEmCasaModule } from './../../widgets/condor-em-casa/condor-em-casa.module';
import { CondorMaisProximoModule } from './../../widgets/condor-mais-proximo/condor-mais-proximo.module';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BlogModule,
    LivesModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    OfertasModule,
    PromocaoModule,
    AplicativoModule,
    PromocaoTwoModule,
    CondorEmCasaModule,
    MDBBootstrapModule,
    CondorMaisProximoModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
