import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadDelLestePage } from './ciudad-del-leste.page';

const routes: Routes = [
  {
    path: '',
    component: CiudadDelLestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadDelLestePageRoutingModule {}
