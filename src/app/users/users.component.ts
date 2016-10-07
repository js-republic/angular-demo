import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import UsersService from "../services/users.service";

// animation stuff
import {
  trigger,
  state,
  style,
  transition,
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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService],
  animations,
})
export class UsersComponent implements OnInit {

  private users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }


  handleDelete(userId) {
    console.log('tototo');
    this.usersService.deleteUser(userId);
    this.users = this.usersService.getUsers();
  }

}



