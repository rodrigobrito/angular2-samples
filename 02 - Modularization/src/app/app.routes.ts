import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';

const routes: Routes = [   
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home1', loadChildren: 'app/home1/home1.module#Home1Module' },   
  { path: 'home2', loadChildren: 'app/home2/home2.module#Home2Module' },
  { path: 'home3', component: Home3Component },
  { path: 'home4', component: Home4Component },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);