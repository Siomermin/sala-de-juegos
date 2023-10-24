import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss'],
})
export class MayorMenorComponent {

  score: number = 0;
  currentScore: number = 0;
  playing: boolean = true;
  currentRoll: number = 1; // Initialize it to a default value
  tries: number = 1;
  lastRoll: number = 0; // Add a variable to store the last roll




  constructor() {
    this.init();
  }

  init() {
    this.score = 0;
    this.currentScore = 0;
    this.playing = true;
  }

  restartGame() {
    this.init();
    this.tries = 0;
    this.lastRoll = 0;
  }

  guessHigher() {
    if (this.playing) {
      let nextRoll;
      do {
        nextRoll = Math.floor(Math.random() * 6) + 1;
      } while (nextRoll === this.currentRoll || nextRoll === this.lastRoll);

      if (nextRoll > this.currentRoll) {
        this.currentScore++;

        if (this.currentScore === 10) {
          this.playing = false;
          this.showEndMessage();
        }
      } else {
        this.currentScore = 0;
      }

      this.score += this.currentScore;
      this.lastRoll = this.currentRoll; // Store the current roll as the last one
      this.currentRoll = nextRoll;
      this.tries++;
    }
  }

  guessLower() {
    if (this.playing) {
      let nextRoll;
      do {
        nextRoll = Math.floor(Math.random() * 6) + 1;
      } while (nextRoll === this.currentRoll || nextRoll === this.lastRoll);

      if (nextRoll < this.currentRoll) {
        this.currentScore++;

        if (this.currentScore === 10) {
          this.playing = false;
          this.showEndMessage();
        }
      } else {
        this.currentScore = 0;
      }

      this.score += this.currentScore;
      this.lastRoll = this.currentRoll; // Store the current roll as the last one
      this.currentRoll = nextRoll;
      this.tries++;
    }
  }


  newGame() {
    this.init();
  }

  showEndMessage() {
    Swal.fire(`Felicitaciones! Acertaste 10 veces seguidas en ${this.tries} intentos.`);
    this.restartGame(); // Call the restartGame method when someone wins
  }
}
