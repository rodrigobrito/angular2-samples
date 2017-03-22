import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home3Component } from './home3.component';
import { SampleService } from './services/sample.service';

const routes: Routes = [{
    path: '',
    component: Home3Component   
}];

@NgModule({  
  imports: [ CommonModule, RouterModule, RouterModule.forChild(routes) ],
  declarations: [ Home3Component ],
  exports: [ Home3Component, RouterModule ],
  providers: [ SampleService ]
})

export class Home3Module {
    
}