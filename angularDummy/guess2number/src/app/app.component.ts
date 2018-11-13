import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class='container'>
      <h1>
       Guess Number 2 !
      </h1>
      <div class="card bg-light mb-3">
         <div class="card-body">
            <p class="card-text"> Guess the number between 1 and 1000</p>
         </div>
      </div>
      <div>
          <label>Your Guess: </label>
          <input type="number" [value]="guess" (input)="guess = $event.target.value" />
          <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
          <button (click)="initializeGame()" class="btn btn-warning btn-sm">Restart</button>
      </div>

      <div>
         <p *ngIf="deviation < 0" class="alert alert-warning">Your Guess is higher</p>
         <p *ngIf="deviation > 0" class="alert alert-warning">Your Guess is lower</p>
         <p *ngIf="deviation === 0" class="alert alert-success">Yes. That's right !</p>
      </div>

      <p class="text-info"> No of guess:
        <span class="badge">{{noOfTries}}</span>
      </p>

    </div>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  guess: number;
  deviation: number;
  noOfTries: number;
  original: number;

  constructor() {

    this.initializeGame();
  }
  verifyGuess(): void {

    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }

  initializeGame(): void {

    this.noOfTries = 0;
    this.deviation = null;
    this.guess = null;
    this.original = Math.floor((Math.random() * 1000) + 1);
  }
}
