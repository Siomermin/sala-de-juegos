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

  maxWrong: number = 6;

  answer: string = '';

  mistakes: number = 0;

  guessed: any[] = [];

  keyboard: any[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '-'
  ];

  pokemones: string[] = [];

  wordStatus: any = null;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.getPokemonNames();
    setTimeout(() => {
      this.randomWord();
      this.guessedWord();
    }, 100);
  }

  getPokemonNames() {
    this.pokemonService.getAllPokemonNames().subscribe((data: any) => {
      this.pokemones = data.results.map((pokemon: any) => pokemon.name);
    });
  }


  randomWord() {
    this.answer =
      this.pokemones[Math.floor(Math.random() * this.pokemones.length)];
    console.log(this.answer);
  }

  handleGuess(chosenLetter: string) {
    this.guessed.indexOf(chosenLetter) === -1
      ? this.guessed.push(chosenLetter)
      : null;
    (<HTMLInputElement>document.getElementById(chosenLetter)).setAttribute(
      'disabled',
      'true'
    );

    if (this.answer.indexOf(chosenLetter) >= 0) {
      this.guessedWord();
      this.checkIfGameWon();
    } else if (this.answer.indexOf(chosenLetter) === -1) {
      this.mistakes++;
      this.updateMistakes();
      this.checkIfGameLost();
    }
  }

  checkIfGameWon() {
    if (this.wordStatus == this.answer) {
      Swal.fire('GANASTE!!!', '', 'success');
      this.addScore();
    }
  }

  addScore() {
    let puntaje = {
      puntos: 0,
      uid: '',
      fecha: '',
    };
    // this.authService.isLoggedIn().subscribe(usuario=>{
    //   puntaje.uid=usuario!.uid;
    //   puntaje.puntos=6-this.mistakes;
    //   puntaje.fecha=Date.now().toString();
    //   console.log(puntaje);
    //   this.authS.agregarPuntaje(puntaje);
    // })
  }
  checkIfGameLost() {
    if (this.mistakes == this.maxWrong) {
      (<HTMLInputElement>document.getElementById('wordSpotlight')).innerHTML =
        'La respuesta correcta era: ' + this.answer;
      Swal.fire('Perdiste :(', '', 'error');
    }
  }
  reset() {
    this.mistakes = 0;
    this.guessed = [];
    this.keyboard.forEach((element) => {
      (<HTMLInputElement>document.getElementById(element)).removeAttribute(
        'disabled'
      );
    });
    this.keyboard = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    this.randomWord();
    this.guessedWord();
    this.updateMistakes();
  }

  guessedWord() {
    this.wordStatus = this.answer
      .split('')
      .map((letter) => (this.guessed.indexOf(letter) >= 0 ? letter : ' _ '))
      .join('');
    (<HTMLInputElement>document.getElementById('wordSpotlight')).innerHTML =
      this.wordStatus;
  }

  updateMistakes() {
    (<HTMLInputElement>document.getElementById('mistakes')).innerHTML =
      this.mistakes.toString();
  }
}
