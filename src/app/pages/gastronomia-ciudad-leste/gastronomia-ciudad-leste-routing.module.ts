import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaCiudadLestePage } from './gastronomia-ciudad-leste.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaCiudadLestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaCiudadLestePageRoutingModule {}
