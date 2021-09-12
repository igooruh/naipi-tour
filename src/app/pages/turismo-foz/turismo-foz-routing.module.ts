import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismoFozPage } from './turismo-foz.page';

const routes: Routes = [
  {
    path: '',
    component: TurismoFozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismoFozPageRoutingModule {}
