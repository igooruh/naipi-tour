import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismoFozPageRoutingModule } from './turismo-foz-routing.module';

import { TurismoFozPage } from './turismo-foz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismoFozPageRoutingModule
  ],
  declarations: [TurismoFozPage]
})
export class TurismoFozPageModule {}
