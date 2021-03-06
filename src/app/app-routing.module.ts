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
  {
    path: 'saltos-monday',
    loadChildren: () => import('./pages/saltos-monday/saltos-monday.module').then( m => m.SaltosMondayPageModule)
  },
  {
    path: 'gastronomia-ciudad-leste',
    loadChildren: () => import('./pages/gastronomia-ciudad-leste/gastronomia-ciudad-leste.module')
    .then( m => m.GastronomiaCiudadLestePageModule)
  },
  {
    path: 'resto-bar',
    loadChildren: () => import('./pages/resto-bar/resto-bar.module').then( m => m.RestoBarPageModule)
  },
  {
    path: 'puerto-iguazu',
    loadChildren: () => import('./pages/puerto-iguazu/puerto-iguazu.module').then( m => m.PuertoIguazuPageModule)
  },
  {
    path: 'turismo-puerto-iguazu',
    loadChildren: () => import('./pages/turismo-puerto-iguazu/turismo-puerto-iguazu.module').then( m => m.TurismoPuertoIguazuPageModule)
  },
  {
    path: 'aripuca',
    loadChildren: () => import('./pages/aripuca/aripuca.module').then( m => m.AripucaPageModule)
  },
  {
    path: 'gastronomia-puerto-iguazu',
    loadChildren: () => import('./pages/gastronomia-puerto-iguazu/gastronomia-puerto-iguazu.module')
    .then( m => m.GastronomiaPuertoIguazuPageModule)
  },
  {
    path: 'quincho-tio-querido',
    loadChildren: () => import('./pages/quincho-tio-querido/quincho-tio-querido.module').then( m => m.QuinchoTioQueridoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
