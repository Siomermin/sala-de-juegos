import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User = {
    email: '',
    password: ''
  };

  constructor( private AuthService: AuthService, private router: Router ) {}

  register() {
    const { email, password } = this.user;
    this.AuthService.register( email, password ).then( res => {
      Swal.fire('Registrado Correctamente');
      this.login();
    }).catch((error) => {
      Swal.fire(error.message);
      return null;
    });
  }

  login() {
    const { email, password } = this.user;
    this.AuthService.login( email, password ).then( res => {
      Swal.fire('Bienvenido!');
      this.router.navigateByUrl('/home');
    }, error => {
      Swal.fire(error.message);
    });
  }


}

