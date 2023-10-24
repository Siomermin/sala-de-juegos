import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaminasComponent } from './components/buscaminas/buscaminas.component';

const routes: Routes = [
  {
    path: '',
    component: BuscaminasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscaminasRoutingModule { }
