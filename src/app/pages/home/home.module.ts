import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home.component';

import { BlogModule } from '../../widgets/blog/blog.module';
import { MenuModule } from '../../widgets/menu/menu.module';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { OfertasModule } from '../../widgets/ofertas/ofertas.module';
import { CompreOnlineModule } from '../../widgets/compre-online/compre-online.module';
import { ComoFuncionaModule } from '../../widgets/como-funciona/como-funciona.module';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
  BlogModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    OfertasModule,
    ComoFuncionaModule,
    CompreOnlineModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
