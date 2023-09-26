import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss'],
})
export class MayorMenorComponent {
  progressValue: number = 0; // Set an initial value
  currentNumber: number = 0;
  nextNumber: number= 0;
  playerGuess: string = ''; // 'higher' or 'lower'
  message: string = '';

  constructor(private authService: AuthService) {
    this.startGame();
  }

  startGame() {
    this.currentNumber = this.generateRandomNumber();
    this.nextNumber = this.generateRandomNumber();
    this.playerGuess = '';
    this.message = '';
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
  }

  makeGuess(guess: string) {
    const isNextHigher = this.nextNumber > this.currentNumber;

    if ((isNextHigher && guess === 'higher') || (!isNextHigher && guess === 'lower')) {
      this.message = 'Correct! You guessed right.';
      this.progressValue += 10;
    } else {
      this.message = 'Sorry, that was incorrect.';
      this.progressValue -= 10;
      if (this.progressValue < 0) {
        this.progressValue = 0; // Ensure progressValue doesn't go below 0
      }
    }

    // Move to the next round
    this.currentNumber = this.nextNumber;
    this.nextNumber = this.generateRandomNumber();
  }

}
