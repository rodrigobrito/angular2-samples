import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleService } from './services/sample.service';

@NgModule({  
   providers: [ SampleService ]
})
export class SharedModule {
    // static forRoot() : ModuleWithProviders {
    //    return {
    //       ngModule : SharedModule,
    //       providers: [SampleService]
    //    };
    // }
}