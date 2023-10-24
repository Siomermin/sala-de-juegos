import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaFormComponent } from './components/encuesta-form/encuesta-form.component';

const routes: Routes = [
  { path: '', component: EncuestaFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
