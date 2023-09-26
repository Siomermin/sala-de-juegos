import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../modules/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loggedUser = this.authService.getLoggedUser();

  constructor( private authService: AuthService, private router: Router ) {}

  logout(): void {
    this.authService.logout().then( res => {
      this.router.navigateByUrl('/login');
    }, err => {
      alert(err);
    }
    );
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
