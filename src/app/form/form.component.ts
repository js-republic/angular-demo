import { Component, OnInit } from '@angular/core';

import { User } from './../models/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User = new User();
  userTypes: string[] = ["Célibataire", "Union libre", "Pacsé(e)", "Marié(e)", "Divorcé(e)", "veuf(ve)"];


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

}
