import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaFozPageRoutingModule } from './gastronomia-foz-routing.module';

import { GastronomiaFozPage } from './gastronomia-foz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaFozPageRoutingModule
  ],
  declarations: [GastronomiaFozPage]
})
export class GastronomiaFozPageModule {}
