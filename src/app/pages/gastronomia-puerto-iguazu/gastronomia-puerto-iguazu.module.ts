import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaPuertoIguazuPageRoutingModule } from './gastronomia-puerto-iguazu-routing.module';

import { GastronomiaPuertoIguazuPage } from './gastronomia-puerto-iguazu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaPuertoIguazuPageRoutingModule
  ],
  declarations: [GastronomiaPuertoIguazuPage]
})
export class GastronomiaPuertoIguazuPageModule {}
