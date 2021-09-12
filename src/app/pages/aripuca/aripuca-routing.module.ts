import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AripucaPage } from './aripuca.page';

const routes: Routes = [
  {
    path: '',
    component: AripucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AripucaPageRoutingModule {}
