import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

// animation stuff
import {
  Input,
  Output,
  trigger,
  state,
  style,
  transition,
  EventEmitter,
  animate
} from '@angular/core';

const animations = [
  trigger('fadeOut', [ 
    state('out', style({ opacity: 1  })),
    transition('* => void', [
      animate('300ms 100ms ease-out',
              style({opacity: 0, height: 0}),
             )
    ]),
  ]),
]

@Component({
  selector: 'user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations,
})
export class UsersComponent {

  @Input() users: User[];
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }


  handleDelete(userId) {
    this.onDelete.emit({userId});
  }

}



