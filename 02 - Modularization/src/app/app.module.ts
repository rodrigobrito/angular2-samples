import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SampleService } from './shared/services/sample.service';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { SharedModule } from "./shared/shared.module";
import { Home3Module  } from "./home3/home3.module";
import { Home4Module  } from "./home4/home4.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,    
    Home3Module,
    Home4Module,
    SharedModule//.forRoot()
  ],
  providers: [ SampleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
