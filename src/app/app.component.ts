import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router){
    this.router.events.subscribe((e) => {
    if(e instanceof NavigationEnd) {
    window.scroll(0,0);
    }
    })
  }
  title = 'dnaid';
}
