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
    console.log(user);
    const newUser = new User({
      id: this.cptId++,
      username: user.username,
      birthday: user.birthday,
      email: user.email,
      type: user.type
    });

    this.users.push(newUser);
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
