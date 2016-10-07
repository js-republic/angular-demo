import { Component, OnInit, HostListener } from '@angular/core';
import {Game2048CaseComponent} from "../game-2048-case/game-2048-case.component";

@Component({
  selector: 'app-game-2048',
  templateUrl: './game-2048.component.html',
  styleUrls: ['./game-2048.component.css']
})
export class Game2048Component implements OnInit {
  /* ATTRIBUTES */
  public rowsLength: number = 4;
  public columnsLength: number = 4;
  public data: Array<Array<number>>;
  public key: string;


  /* LIFECYLE */
  constructor() { }

  ngOnInit() {
    // Construct data
    this.data = [];

    for (let r = 0; r < this.rowsLength; r++) {
      let currentRow = [];

      for (let c = 0; c < this.columnsLength; c++) {
        currentRow.push(0);
      }

      this.data.push(currentRow);
    }


    for (let i = 0; i < 2; i++) {
      let row   = Math.floor(Math.random() * this.rowsLength);
      let cell  = Math.floor(Math.random() * this.columnsLength);

      this.data[row][cell] = 2;
    }
  }


  /* EVENTS */
  @HostListener('window:keydown', ['$event'])
  private onKeydown(e: KeyboardEvent) {
    this.key = e.key;
  }
}
