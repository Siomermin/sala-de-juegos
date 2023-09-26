import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './components/preguntados.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    CoreModule
  ]
})
export class PreguntadosModule { }
