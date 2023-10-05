import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'games/ahorcado',
    loadChildren: () => import('./modules/games/ahorcado/ahorcado.module').then((m) => m.AhorcadoModule),
  },
  {
    path: 'games/mayor-menor',
    loadChildren: () => import('./modules/games/mayor-menor/mayor-menor.module').then((m) => m.MayorMenorModule),
  },
  {
    path: 'games/preguntados',
    loadChildren: () => import('./modules/games/preguntados/preguntados.module').then((m) => m.PreguntadosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
