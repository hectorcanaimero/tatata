import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
]

export const APP_ROUTE = RouterModule.forRoot(app);
