import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismoPuertoIguazuPageRoutingModule } from './turismo-puerto-iguazu-routing.module';

import { TurismoPuertoIguazuPage } from './turismo-puerto-iguazu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismoPuertoIguazuPageRoutingModule
  ],
  declarations: [TurismoPuertoIguazuPage]
})
export class TurismoPuertoIguazuPageModule {}
