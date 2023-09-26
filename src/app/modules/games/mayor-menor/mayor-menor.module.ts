import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { MayorMenorComponent } from './components/mayor-menor.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    MayorMenorComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    CoreModule,
  ]
})
export class MayorMenorModule { }
