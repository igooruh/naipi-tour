import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuinchoTioQueridoPage } from './quincho-tio-querido.page';

const routes: Routes = [
  {
    path: '',
    component: QuinchoTioQueridoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuinchoTioQueridoPageRoutingModule {}
