import { Component, OnInit } from '@angular/core';
import UsersService from "../services/users.service";
import { User } from './../models/user';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  providers: [UsersService],
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  getUsers() {
    return this.usersService.getUsers();
  }

  handleDelete(event) {
    this.usersService.deleteUser(event.userId);
  }

  handleSubmit($event) {
    this.usersService.addUser($event.user);
  }

}
