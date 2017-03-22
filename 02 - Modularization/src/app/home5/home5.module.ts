import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home5Component } from './home5.component';
import { SampleService } from '../shared/services/sample.service';

const routes: Routes = [{
    path: '',
    component: Home5Component   
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ Home5Component ],
  exports: [ Home5Component, RouterModule ],
  providers: [ SampleService ]
})

export class Home5Module {
    
}