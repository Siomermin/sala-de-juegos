import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { CoreModule } from 'src/app/core/core.module';
import { ResultadosTableComponent } from './components/resultados-table/resultados-table.component';


@NgModule({
  declarations: [
    ResultadosComponent,
    ResultadosTableComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    CoreModule
  ]
})
export class ResultadosModule { }
