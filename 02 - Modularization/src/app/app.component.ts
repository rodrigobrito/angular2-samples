import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modules - Lazy load instances...';  

  constructor(private router: Router) {    
    this.gotHome1X();
  }  

  gotHome1X() : void  {
    this.router.navigate([`/home1/x`]);
  }

  gotHome1Y() : void  {
    this.router.navigate([`/home1/y`]);
  }

  gotHome2() : void  {
    this.router.navigate([`/home2`]);
  }

  gotHome3() : void  {
    this.router.navigate([`/home3`]);
  }

  gotHome4() : void  {
    this.router.navigate([`/home4`]);
  }

  gotHome5() : void  {
    this.router.navigate([`/home5`]);
  }
}
