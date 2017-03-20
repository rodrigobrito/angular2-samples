import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SiteChildComponent } from './input-samples/site-child-component';
import { SiteParentComponent } from './input-samples/site-parent-component';

@NgModule({
  declarations: [
    SiteChildComponent,
    SiteParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ SiteParentComponent ]
})
export class AppModule { }
