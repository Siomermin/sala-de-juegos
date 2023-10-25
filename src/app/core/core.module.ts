import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';
import { EncuestaBalloonComponent } from './components/encuesta-balloon/encuesta-balloon.component';
import { ResultadosBalloonComponent } from './components/resultados-balloon/resultados-balloon.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChatComponent,
    HomeBtnComponent,
    EncuestaBalloonComponent,
    ResultadosBalloonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    ChatComponent,
    HomeBtnComponent,
    EncuestaBalloonComponent,
    ResultadosBalloonComponent
  ]
})
export class CoreModule { }
