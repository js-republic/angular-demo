import { Component, OnInit, Input } from '@angular/core';
import { MyNumber } from '../MyNumber';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter: MyNumber;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter.setValue(this.counter.getValue() + 1);
  }

  decrement() {
    this.counter.setValue(this.counter.getValue() - 1);
  }

}
