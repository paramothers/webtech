import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {

    this.noOfTries = 0;
    this.noOfTries = null;
    this.guess = null;
    this.original = Math.floor((Math.random() * 1000) + 1);
  }

  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }
}
