import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home.component';

import { DdvModule } from './../../widgets/ddv/ddv.module';
import { BlogModule } from '../../widgets/blog/blog.module';
import { QuizModule } from './../../widgets/quiz/quiz.module';
import { GamesModule } from './../../widgets/games/games.module';
import { FooterModule } from 'src/app/widgets/footer/footer.module';
import { HeaderModule } from 'src/app/widgets/header/header.module';
import { OfertasModule } from '../../widgets/ofertas/ofertas.module';
import { AppOldModule } from './../../widgets/app-old/app-old.module';
import { SorteiosModule } from '../../widgets/sorteios/sorteios.module';
import { ParceirosModule } from './../../widgets/parceiros/parceiros.module';
import { CondorEmCasaModule } from './../../widgets/condor-em-casa/condor-em-casa.module';
import { FilterInstagramModule } from './../../widgets/filter-instagram/filter-instagram.module';
import { CondorMaisProximoModule } from './../../widgets/condor-mais-proximo/condor-mais-proximo.module';

const app: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    DdvModule,
    BlogModule,
    QuizModule,
    GamesModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    AppOldModule,
    OfertasModule,
    SorteiosModule,
    ParceirosModule,
    CondorEmCasaModule,
    MDBBootstrapModule,
    FilterInstagramModule,
    CondorMaisProximoModule,
    RouterModule.forChild(app),
  ]
})
export class HomeModule { }
