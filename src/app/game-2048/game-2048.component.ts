import { Component, OnInit, HostListener } from '@angular/core';


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
  public busy: boolean = false;
  public directions: any = {
    LEFT: 'slideLeft',
    RIGHT: 'slideRight',
    UP: 'slideUp',
    DOWN: 'slideDown'
  };


  /* LIFECYLE */
  constructor() { }

  ngOnInit() {
    this.reset();
    this.createCase(2);
  }


  /* METHODS */
  createCase(occurrence?: number) {
    this.busy       = true;
    var emptyCases  = this.checkValues();

    if (!emptyCases.length) {
      this.reset();
      occurrence = 2;
    }

    window.setTimeout(() => {
      for (let i = 0; i < (occurrence || 1); i++) {
        let currentCase = emptyCases[Math.floor(Math.random() * emptyCases.length)];

        this.data[currentCase.row][currentCase.column] = 2;
        this.busy = false;
      }
    }, 200);
  }

  checkValues(): Array<Cell> {
    let emptyCases = [];

    for (let r = 0; r < this.rowsLength; r++) {
      for (let c = 0; c < this.columnsLength; c++) {
        if (!this.data[r][c]) {
          emptyCases.push(new Cell(r, c));
        }
      }
    }

    return emptyCases;
  }

  reset() {
    this.data = [];

    for (let r = 0; r < this.rowsLength; r++) {
      let currentRow = [];

      for (let c = 0; c < this.columnsLength; c++) {
        currentRow.push(0);
      }

      this.data.push(currentRow);
    }
  }

  makeDirection(direction?: string) {
    if (this.busy) {
      return null;
    }

    if (!direction) {
      direction = this.key.toLowerCase().substring(5);
    }

    let fnName = this.directions[direction.toUpperCase()];
    if (fnName) {
      this[fnName]();

      this.createCase();
    }

  }

  slideLeft() {
    for (let r = 0; r < this.data.length; r++) {
      this.fusionRow(0, this.columnsLength - 1, r);
    }
  }

  slideRight() {
    for (let r = 0; r < this.data.length; r++) {
      this.fusionRow(this.columnsLength - 1, 0, r);
    }
  }

  slideDown() {
    for (let c = 0; c < this.columnsLength; c++) {
      this.fusionColumn(this.rowsLength - 1, 0, c);
    }
  }

  slideUp() {
    for (let c = 0; c < this.columnsLength; c++) {
      this.fusionColumn(0, this.rowsLength - 1, c);
    }
  }

  fusionColumn(rStart: number, rEnd: number, c: number) {
    let incrementation = (rStart > rEnd ? -1 : 1);

    for (let r = rStart; r != rEnd; r = r + incrementation) {
      let currentRow  = this.data[r][c],
        move          = 0,
        movedRow      = 0;

      // Determine how many times the case must move
      for (let m = (r + incrementation); m != (rEnd + incrementation); m = m + incrementation) {
        movedRow  = this.data[m][c];
        move++;

        if (movedRow) { break; }
      }

      // If there are no row to be moved
      if (currentRow && currentRow != movedRow) {
        continue;
      }

      if (move) {
        this.data[r][c]                           = currentRow + this.data[r + (move * incrementation)][c];
        this.data[r + (move * incrementation)][c] = 0;

        if (!currentRow && movedRow) {
          r = r - incrementation;
        }
      }
    }
  }

  fusionRow(cStart: number, cEnd: number, r: number) {
    let incrementation = (cStart > cEnd ? -1 : 1);

    for (let c = cStart; c != cEnd; c = c + incrementation) {
      let currentCol  = this.data[r][c],
        move          = 0,
        movedCol      = 0;

      // Determine how many times the case must move
      for (let m = (c + incrementation); m != (cEnd + incrementation); m = m + incrementation) {
        movedCol = this.data[r][m];
        move++;

        if (movedCol) { break; }
      }

      if (currentCol && currentCol != movedCol) {
        continue;
      }

      if (move) {
        this.data[r][c]                           = currentCol + this.data[r][c + (move * incrementation)];
        this.data[r][c + (move * incrementation)] = 0;

        if (!currentCol && movedCol) {
          c = c - incrementation;
        }
      }
    }
  }


  /* EVENTS */
  @HostListener('window:keydown', ['$event'])
  public onKeydown(e: KeyboardEvent) {
    if (this.key != e.key) {
      this.key = e.key;
      this.makeDirection();
    }
  }

  @HostListener('window:keyup')
  public onKeyup() {
    this.key = '';
  }
}



/* INTERNAL CLASSES */
class Cell {
  row: number;
  column: number;

  constructor (row: number, column: number) {
    this.row     = row;
    this.column  = column;
  }
}