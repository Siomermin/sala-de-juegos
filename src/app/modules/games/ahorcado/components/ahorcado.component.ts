import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Swal from 'sweetalert2';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {

  maxMistakes: number = 6;
  answer: string = '';
  mistakes: number = 0;
  guessed: string[] = [];
  keyboard: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'
  ];
  pokemones: string[] = [];
  wordStatus: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonNames();
    setTimeout(() => {
      this.randomWord();
      this.guessedWord();
    }, 100);
  }

  getPokemonNames() {
    this.pokemonService.getAllPokemonNames().subscribe(
      (data: any) => {
        this.pokemones = data.results.map((pokemon: any) => pokemon.name);
      },
      (error) => {
        console.error('Error al traer los nombres de los Pokemones', error);
      }
    );
  }

  randomWord() {
    this.answer = this.pokemones[Math.floor(Math.random() * this.pokemones.length)];
    console.log(this.answer);
  }

  handleGuess(chosenLetter: string) {
    if (!this.guessed.includes(chosenLetter)) {
      this.guessed.push(chosenLetter);
      if (this.answer.includes(chosenLetter)) {
        this.guessedWord();
        this.checkIfGameWon();
      } else {
        this.mistakes++;
        this.checkIfGameLost();
      }
    }
  }

  checkIfGameWon() {
    if (this.wordStatus == this.answer) {
      Swal.fire('GANASTE!!!', '', 'success');
    }
  }

  checkIfGameLost() {
    if (this.mistakes == this.maxMistakes) {
      Swal.fire('Perdiste :(', '', 'error');
    }
  }

  reset() {
    this.mistakes = 0;
    this.guessed = [];
    this.keyboard = 'abcdefghijklmnopqrstuvwxyz-'.split('');
    this.randomWord();
    this.guessedWord();
  }

  guessedWord() {
    this.wordStatus = this.answer
      .split('')
      .map((letter) => (this.guessed.includes(letter) ? letter : ' _ '))
      .join('');
  }


}
