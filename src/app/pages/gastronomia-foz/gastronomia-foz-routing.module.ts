import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaFozPage } from './gastronomia-foz.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaFozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaFozPageRoutingModule {}
