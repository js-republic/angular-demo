import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export default class UsersService {

  private users: User[] = new Array<User>(); 
  private cptId = 0;

  constructor() { 
    for (let i = 0; i < 5; i++) {
      this.users.push(new User({
        id: this.cptId++,
        username:`Vincent-${i}`,
        birthday: new Date(),
        email: 'vincent.cordobes@js-republic.com',
        type: 'marié'
      }));
    }
  }


  addUser(user: User): void{
    this.cptId++;
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => (
      user.id !== userId
    ));
  }

  getUser(userId: number): User {
    return this.users.find(user => (
      user.id === userId
    ));
  }

}
