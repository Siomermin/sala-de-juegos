import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/services/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';

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
  guesses: number = 10;
  loggedUser: any;

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.init();

    this.authService.getLoggedUser().subscribe((user) => {
      this.loggedUser = user;
    });
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

        if (this.currentScore === this.guesses) {
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

        if (this.currentScore === this.guesses) {
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

  saveGameScore(gameStatus: string) {
    let date = new Date();
    const timestamp = new Date(date);

    const score = {
      Resultado: gameStatus,
      Aciertos: this.guesses,
      Intentos: this.tries,
      Fecha: timestamp,
      Usuario: this.loggedUser.email,
    };

    this.firestoreService.save(score, 'mayor-menor-score');
  }

  showEndMessage() {
    Swal.fire(
      `Felicitaciones! Acertaste ${this.guesses} veces seguidas en ${this.tries} intentos.`
    );
    this.saveGameScore('Ganó');
    this.restartGame(); // Call the restartGame method when someone wins
  }
}
