import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
    path: '',
    component: Home2Component   
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes),  SharedModule],
  declarations: [ Home2Component ],
  exports: [ Home2Component, RouterModule]
})

export class Home2Module {
    
}