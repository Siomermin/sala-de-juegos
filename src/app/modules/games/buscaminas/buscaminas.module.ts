import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaminasRoutingModule } from './buscaminas-routing.module';
import { BuscaminasComponent } from './components/buscaminas/buscaminas.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    BuscaminasComponent
  ],
  imports: [
    CommonModule,
    BuscaminasRoutingModule,
    CoreModule
  ]
})
export class BuscaminasModule { }
