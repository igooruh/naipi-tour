import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaltosMondayPage } from './saltos-monday.page';

const routes: Routes = [
  {
    path: '',
    component: SaltosMondayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaltosMondayPageRoutingModule {}
