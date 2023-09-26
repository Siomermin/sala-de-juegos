import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.scss']
})
export class HomeBtnComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
