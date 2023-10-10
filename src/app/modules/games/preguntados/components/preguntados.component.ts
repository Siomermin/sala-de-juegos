import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent {
  // Initialize variables
  flagUrl: string = '';
  options: string[] = [];
  correctOptionIndex?: number;
  userScore: number = 0;
  totalQuestions = 25; // Set the total number of questions
  questionsAnswered = 0; // Initialize the counter

  // Keep track of options for the current question
  currentQuestionOptions: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    // Start a new quiz when the component is initialized
    this.startNewQuiz();
  }

  // Start a new quiz
  startNewQuiz(): void {
    // Fetch a random country and its flag
    this.countryService.getCountries().subscribe((countries) => {
      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];

      // Set the flag URL
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

    // Increment the total questions answered
    this.questionsAnswered++;

    if (this.questionsAnswered >= this.totalQuestions) {
      // The game should end
      this.endGame();
    } else {
      // Start a new quiz if the game is not over
      this.startNewQuiz();
    }
  }

  endGame(): void {
    // Implement logic to end the game, such as displaying a message
    // or redirecting to a game-over screen.
    Swal.fire('Felicitaciones! Tu puntaje fue:' + this.userScore);

    // alert('Game over! Your final score: ' + this.userScore);
    // You can implement more sophisticated game-ending logic here.
  }
}
