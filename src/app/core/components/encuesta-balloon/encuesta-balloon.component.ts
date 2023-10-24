import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-balloon',
  templateUrl: './encuesta-balloon.component.html',
  styleUrls: ['./encuesta-balloon.component.scss'],
})
export class EncuestaBalloonComponent {
  constructor(private router: Router) {}

  goToEncuesta() {
    this.router.navigateByUrl('encuesta');
  }

}
