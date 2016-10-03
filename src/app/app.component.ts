import { Component } from '@angular/core';
import { MyNumber } from './MyNumber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter: MyNumber = new MyNumber();

  constructor() {
    this.counter.setValue(1000);
  }

  reset() {
    this.counter.setValue(0);
  }

}
