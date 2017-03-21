import { Component, Input, OnInit, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'home2',
  templateUrl: './home2.component.html'
})

export class Home2Component implements OnInit {  

  constructor(private sampleService : SampleService) {        
  }

  ngOnInit() {               
  }

  increment() : void {
    this.sampleService.increment();
  }
}