import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaCiudadLestePageRoutingModule } from './gastronomia-ciudad-leste-routing.module';

import { GastronomiaCiudadLestePage } from './gastronomia-ciudad-leste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaCiudadLestePageRoutingModule
  ],
  declarations: [GastronomiaCiudadLestePage]
})
export class GastronomiaCiudadLestePageModule {}
