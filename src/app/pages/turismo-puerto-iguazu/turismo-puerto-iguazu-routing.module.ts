import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismoPuertoIguazuPage } from './turismo-puerto-iguazu.page';

const routes: Routes = [
  {
    path: '',
    component: TurismoPuertoIguazuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismoPuertoIguazuPageRoutingModule {}
