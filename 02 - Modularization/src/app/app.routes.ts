import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [   
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home1', loadChildren: 'app/home1/home1.module#Home1Module' },   
  { path: 'home2', loadChildren: 'app/home2/home2.module#Home2Module' }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);