import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Site } from './models/site';
@Component({
  selector: 'site-child',
  template: `
    <h3>{{site.name}}</h3>
    <p>{{site.description}}</p>
    <button (click)="dispatch()">Disparar</button>
  `,  
})
export class SiteChildComponent implements OnChanges  { //implements OnChanges
  @Output() onDispatch = new EventEmitter<Site>();

  // *** Pass data from parent to child with input binding ***
  // @Input() site: Site;  
 
  // *** Intercept input property changes with a setter ***  
  // private _site: Site; 

  // @Input()
  // set site(site: Site) {    
  //   site.name += " - VVO"
  //   this._site = site;
  // }
  // get site(): Site { return this._site; }

  //Intercept input property changes with ngOnChanges
  @Input() site: Site;  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {    
    for (let propName in changes) {
      if (propName == "site") 
      {
        let changedProp = changes[propName];
        let site : Site = changedProp.currentValue;
        site.name += " - OnChange";
        return;
      } 
    }    
  }  

  dispatch() : void {
      this.onDispatch.emit(this.site);
  }
}