import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaPuertoIguazuPage } from './gastronomia-puerto-iguazu.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaPuertoIguazuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaPuertoIguazuPageRoutingModule {}
