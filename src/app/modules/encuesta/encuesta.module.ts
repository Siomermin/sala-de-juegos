import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EncuestaRoutingModule } from './encuesta-routing.module';

import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    EncuestaFormComponent,
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class EncuestaModule { }
