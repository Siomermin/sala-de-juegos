import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados-balloon',
  templateUrl: './resultados-balloon.component.html',
  styleUrls: ['./resultados-balloon.component.scss']
})
export class ResultadosBalloonComponent {
  constructor(private router: Router) {}

  goToResultados() {
    this.router.navigateByUrl('resultados');
  }

}
