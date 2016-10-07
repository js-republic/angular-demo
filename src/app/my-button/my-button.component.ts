import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() { }

}

// yeah.. don't know how to name it yet!
// so gonna be td-btn for now ;)
@Component({
  selector: 'td-btn',
  templateUrl: `
    <button class="btn table-btn-menu" >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .button {
      transition: all 0.2s ease-out;
      border-radius: 0px;
    }
    .table-btn-menu {
      background: none;
      box-shadow: none;
      outline: none;
      color: #A5A5A5;
      padding: 0;
    }
    `
  ],
})
export class TDBtn implements OnInit {

  constructor() { }

  ngOnInit() { }

}
