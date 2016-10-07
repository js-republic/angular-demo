import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-2048-case',
  templateUrl: './game-2048-case.component.html',
  styleUrls: ['./game-2048-case.component.css']
})
export class Game2048CaseComponent implements OnInit {
  /* ATTRIBUTES */
  @Input() value: number;
  private backgroundColors: Object = {
    0: "#CDC1B5",
    2: "#EEE4DA",
    4: "#ECE0CA",
    8: "#F2B179",
    16: "#F59565",
    32: "#F57C5F",
    64: "#F65D3B",
    128: "#EDCE71",
    256: "#EDCC63",
    512: "#ECC82C",
    1024: "#E7C800",
    2048: "#EEC22E"
  };


  /* LIFECYCLE */
  constructor() { }

  ngOnInit() {
  }


  /* METHODS */
  getBackgroundColorByValue(value: number): string {
    let backgroundColor = this.backgroundColors[value || this.value];

    return backgroundColor || "#CDC1B5";
  }

  getFontColorByValue(value: number): string {
    value = value || this.value;

    return value > 4 ? "white" : "black";
  }
}
