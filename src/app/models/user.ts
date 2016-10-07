export class User {
  id: number;
  username: string;
  birthday: Date;
  email: string;
  password: string;
  type: string;


  constructor(opts?: optParam) {
    if (opts) {
      this.id = opts.id;
      this.username = opts.username;
      this.birthday = opts.birthday;
      this.email = opts.email;
      this.type = opts.type;
    }
  }
}

export interface optParam {
  id: number;
  username: string;
  birthday: Date;
  email: string;
  type: string;
}
