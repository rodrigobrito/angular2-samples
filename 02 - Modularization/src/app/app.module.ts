import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { SharedModule } from "./shared/shared.module";
import { Home3Module  } from "./home3/home3.module";
import { Home4Module  } from "./home4/home4.module";
import { Home5Module  } from "./home5/home5.module";

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
    Home5Module,
    SharedModule //.forRoot()
  ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
