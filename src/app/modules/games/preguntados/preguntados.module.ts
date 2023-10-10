import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './components/preguntados.component';
import { CoreModule } from 'src/app/core/core.module';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    CountryService
  ]
})
export class PreguntadosModule { }
