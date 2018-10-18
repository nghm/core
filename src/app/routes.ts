import { Routes } from '@angular/router';
import { DevpageComponent } from '@nghm/material-devpage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    component: DevpageComponent
  }
];
