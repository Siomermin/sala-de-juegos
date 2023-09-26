import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../interfaces/user';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
  };

  constructor(
    private AuthService: AuthService,
    private router: Router,
  ) {}

  login() {
    const { email, password } = this.user;
    this.AuthService.login(email, password).then(
      (res) => {        
        Swal.fire('Bienvenido!');
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error(error);
        Swal.fire(error.message);
      }
    );
  }

  autoLogin() {
    this.user.email = 'admin@admin.com';
    this.user.password = '111111';
  }

  getLoggedUser() {
    this.AuthService.getLoggedUser().subscribe(
      (res) => {
        console.log(res?.email);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
