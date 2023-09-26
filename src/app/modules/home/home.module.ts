import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    AboutMeComponent
  ]
})
export class HomeModule { }
