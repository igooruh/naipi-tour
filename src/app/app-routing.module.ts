import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'foz-iguacu',
    loadChildren: () => import('./pages/foz-iguacu/foz-iguacu.module').then( m => m.FozIguacuPageModule)
  },
  {
    path: 'turismo-foz',
    loadChildren: () => import('./pages/turismo-foz/turismo-foz.module').then( m => m.TurismoFozPageModule)
  },
  {
    path: 'cataratas',
    loadChildren: () => import('./pages/cataratas/cataratas.module').then( m => m.CataratasPageModule)
  },
  {
    path: 'gastronomia-foz',
    loadChildren: () => import('./pages/gastronomia-foz/gastronomia-foz.module').then( m => m.GastronomiaFozPageModule)
  },
  {
    path: 'raffain',
    loadChildren: () => import('./pages/raffain/raffain.module').then( m => m.RaffainPageModule)
  },
  {
    path: 'ciudad-del-leste',
    loadChildren: () => import('./pages/ciudad-del-leste/ciudad-del-leste.module').then( m => m.CiudadDelLestePageModule)
  },
  {
    path: 'turismo-ciudad-leste',
    loadChildren: () => import('./pages/turismo-ciudad-leste/turismo-ciudad-leste.module').then( m => m.TurismoCiudadLestePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
