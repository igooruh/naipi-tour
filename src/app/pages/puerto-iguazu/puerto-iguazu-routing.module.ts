import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertoIguazuPage } from './puerto-iguazu.page';

const routes: Routes = [
  {
    path: '',
    component: PuertoIguazuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertoIguazuPageRoutingModule {}
