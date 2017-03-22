import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home4Component } from './home4.component';
import { SampleService } from '../shared/services/sample.service';

const routes: Routes = [{
    path: '',
    component: Home4Component   
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ Home4Component ],
  exports: [ Home4Component, RouterModule ],
  providers: [ SampleService ]
})

export class Home4Module {
    
}