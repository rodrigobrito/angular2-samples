import { Component, Input, OnInit, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../shared/services/sample.service';

@Component({
  selector: 'home5',
  templateUrl: './home5.component.html'
})

export class Home5Component implements OnInit {  

  constructor(private sampleService : SampleService) {        
  }

  ngOnInit() {               
  }

  increment() : void {
    this.sampleService.increment();
  }
}