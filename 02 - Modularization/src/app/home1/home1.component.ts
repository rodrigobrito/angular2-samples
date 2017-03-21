import { Component, Input, OnInit, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../shared/services/sample.service';

@Component({
  selector: 'home1',
  templateUrl: './home1.component.html'
})

export class Home1Component implements OnInit {    

  constructor(private sampleService : SampleService) {        
  }

  ngOnInit() {                 
  }

  increment() : void {
    this.sampleService.increment();    
 }  
}