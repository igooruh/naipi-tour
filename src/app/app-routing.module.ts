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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
