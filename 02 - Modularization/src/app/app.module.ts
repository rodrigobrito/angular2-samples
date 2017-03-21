import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SampleService } from './shared/services/sample.service';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,    
  ],
  providers: [ SampleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
