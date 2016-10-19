export default class Character {
  /* ATTRIBUTES */
  private name: string = "guest";
  private level: number = 1;
  email: string;



  /* LIFECYCLE */
  constructor (props: Object)
  {
    for (var propName in props) {
      this[propName] = props[propName];
    }
  }



  /* GETTER and SETTER */
  public getName ()
  {
    return this.name;
  }

  public getLevel ()
  {
    return this.level;
  }

  public getEmail ()
  {
    return this.email;
  }

  public setName (name: string)
  {
    this.name = name;
  }

  public setLevel (level: number)
  {
    this.level = level;
  }

  public setEmail (email: string)
  {
    this.email = email;
  }
}