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
