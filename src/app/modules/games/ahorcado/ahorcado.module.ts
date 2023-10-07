import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import { CoreModule } from 'src/app/core/core.module';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './components/ahorcado.component';
import { PokemonService } from './services/pokemon.service';


@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    PokemonService, // Add the service to the providers array
  ],
})
export class AhorcadoModule { }
