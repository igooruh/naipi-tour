import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataratasPage } from './cataratas.page';

const routes: Routes = [
  {
    path: '',
    component: CataratasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataratasPageRoutingModule {}
