import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToAhorcado() {
    this.router.navigateByUrl('games/ahorcado');
  }

  goToMayorOMenor() {
    this.router.navigateByUrl('games/mayor-menor');
  }

  goToPreguntados() {
    this.router.navigateByUrl('games/preguntados');
  }

  goToBuscaminas() {
    this.router.navigateByUrl('games/buscaminas');
  }
}
