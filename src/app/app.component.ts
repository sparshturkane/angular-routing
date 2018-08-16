import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class
export class AppComponent {

  // variable
  title: string = 'angular-routinggg';

  // constructor
  constructor() {
    console.log('inside consturctor');
  }

  // lifecycle hooks
  ngOnInit() {
    console.log('inside ngOnInit');
  }
}
