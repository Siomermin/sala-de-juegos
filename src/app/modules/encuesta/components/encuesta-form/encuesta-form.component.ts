import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-encuesta-form',
  templateUrl: './encuesta-form.component.html',
  styleUrls: ['./encuesta-form.component.scss'],
})
export class EncuestaFormComponent {
  encuestaForm!: FormGroup;

  loggedUser: any;

  get nombre() {
    return this.encuestaForm.get('nombre');
  }

  get apellido() {
    return this.encuestaForm.get('apellido');
  }

  get edad() {
    return this.encuestaForm.get('edad');
  }

  get nroTelefono() {
    return this.encuestaForm.get('nroTelefono');
  }

  get gustoApp() {
    return this.encuestaForm.get('gustoApp');
  }

  get sugerencias() {
    return this.encuestaForm.get('sugerencias');
  }


  edadValidator(control: AbstractControl) {
    const edad = control.value;
    if (isNaN(edad) || edad < 18 || edad > 99) {
      return { invalidEdad: true };
    }
    return null;
  }

  telefonoValidator(control: AbstractControl) {
    const telefono = control.value;
    if (isNaN(telefono) || telefono.toString().length > 10) {
      return { invalidTelefono: true };
    }
    return null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService,
    private authService: AuthService
  )
  {}

  ngOnInit(): void {
    this.encuestaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: [
        '',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(99),
          this.edadValidator,
        ],
      ],
      nroTelefono: ['', [Validators.required, this.telefonoValidator]],
      gustoApp: ['', [Validators.required]],
      recomendarApp: [true],
      sugerencias: ['', [Validators.required]],
    });

    this.authService.getLoggedUser().subscribe((user) => {
      this.loggedUser = user;
    });
  }

  onSubmit() {
    if (this.encuestaForm.valid) {

    const formData = this.encuestaForm.value;

    formData.user = this.loggedUser.email;

    this.firestoreService.save(formData, 'encuesta');

    Swal.fire({
      icon: 'success',
      title: 'Encuesta enviada!',
    })

    this.sugerencias?.setValue('');
    this.encuestaForm.reset();


    } else {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al completar el formulario!',
      })
    }
  }
}
