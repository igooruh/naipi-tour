import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaffainPage } from './raffain.page';

const routes: Routes = [
  {
    path: '',
    component: RaffainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaffainPageRoutingModule {}
