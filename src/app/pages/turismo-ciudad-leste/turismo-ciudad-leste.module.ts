import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismoCiudadLestePageRoutingModule } from './turismo-ciudad-leste-routing.module';

import { TurismoCiudadLestePage } from './turismo-ciudad-leste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismoCiudadLestePageRoutingModule
  ],
  declarations: [TurismoCiudadLestePage]
})
export class TurismoCiudadLestePageModule {}
