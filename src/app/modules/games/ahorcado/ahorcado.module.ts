import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './components/ahorcado.component';


@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    CoreModule,
  ]
})
export class AhorcadoModule { }
