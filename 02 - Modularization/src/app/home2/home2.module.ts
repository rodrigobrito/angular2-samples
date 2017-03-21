import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2.component';
import { SampleService } from './services/sample.service';

const routes: Routes = [{
    path: '',
    component: Home2Component   
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ Home2Component ],
  exports: [ Home2Component, RouterModule],
  providers: [ SampleService ]
})

export class Home2Module {
    
}