import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';
import Swal from 'sweetalert2';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent {
  flagUrl: string = '';
  options: string[] = [];
  correctOptionIndex?: number;
  userScore: number = 0;
  totalQuestions = 25; // total number of questions
  questionsAnswered = 0;
  loggedUser: any;

  // Keep track of options for the current question
  currentQuestionOptions: string[] = [];

  constructor(
    private countryService: CountryService,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.startNewQuiz();

    this.authService.getLoggedUser().subscribe((user) => {
      this.loggedUser = user;
    });
  }

  startNewQuiz(): void {
    this.countryService.getCountries().subscribe((countries) => {
      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];

      this.flagUrl = randomCountry.flag;

      // Generate incorrect options (random country names)
      this.generateIncorrectOptions(countries, randomCountry.name);

      // Assign the correct option to a random position
      this.correctOptionIndex = Math.floor(Math.random() * 4);
      this.options[this.correctOptionIndex] = randomCountry.name;

      // Store the options for the current question
      this.currentQuestionOptions = this.options.slice();
    });
  }

  // Generate three random incorrect options (country names)
  generateIncorrectOptions(countries: any[], correctName: string): void {
    const randomCountries = this.shuffleArray(countries).slice(0, 4);
    randomCountries.forEach((country, index) => {
      if (index !== this.correctOptionIndex) {
        this.options[index] = country.name;
      }
    });
  }

  // Shuffle an array (Fisher-Yates algorithm)
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Check if the user's answer is correct
  checkAnswer(selectedIndex: number): void {
    if (selectedIndex === this.correctOptionIndex) {
      // User's answer is correct, increment the score
      this.userScore++;
    }

    this.questionsAnswered++;

    if (this.questionsAnswered >= this.totalQuestions) {
      this.endGame();
    } else {
      this.startNewQuiz();
    }
  }

  saveGameScore(gameStatus: string) {
    let date = new Date();
    const timestamp = new Date(date);

    const score = {
      Resultado: gameStatus,
      Aciertos: this.userScore,
      Preguntas: this.totalQuestions,
      Fecha: timestamp,
      Usuario: this.loggedUser.email,
    };

    this.firestoreService.save(score, 'preguntados-score');
  }

  resetGame(): void {
    this.startNewQuiz();
    this.userScore = 0;
    this.questionsAnswered = 0;
  }

  endGame(): void {
    Swal.fire({
      title:  `Felicitaciones!`,
      text: `Acertaste ${this.userScore} / ${this.totalQuestions}.`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
    });

    this.saveGameScore('Ganó');

    this.resetGame();

  }
}
