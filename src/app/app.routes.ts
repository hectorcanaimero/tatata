import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'loja', loadChildren: () => import('./pages/loja/loja.module').then(m => m.LojaModule) },
]

export const APP_ROUTE = RouterModule.forRoot(app);
