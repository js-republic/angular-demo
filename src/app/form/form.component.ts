import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from './../models/user';
import UsersService from "../services/users.service";


@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [UsersService]
})
export class FormComponent implements OnInit {
  user: User = new User();
  userTypes: string[] = [
    "Célibataire", 
    "Union libre",
    "Pacsé(e)",
    "Marié(e)",
    "Divorcé(e)",
    "veuf(ve)"
  ];

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  handleSubmit($event) {
    $event.preventDefault();
    this.onSubmit.emit({ user: this.user })
  }

}
