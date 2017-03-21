import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1.component';

const routes: Routes = [{
    path: '',
    component: Home1Component
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ Home1Component ],
  exports: [ Home1Component, RouterModule]  
})

export class Home1Module {
    
}