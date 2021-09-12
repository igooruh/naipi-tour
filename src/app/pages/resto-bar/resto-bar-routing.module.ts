import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoBarPage } from './resto-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RestoBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoBarPageRoutingModule {}
