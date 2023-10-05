import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    CoreModule
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
