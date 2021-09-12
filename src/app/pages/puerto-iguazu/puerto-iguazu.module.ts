import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertoIguazuPageRoutingModule } from './puerto-iguazu-routing.module';

import { PuertoIguazuPage } from './puerto-iguazu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertoIguazuPageRoutingModule
  ],
  declarations: [PuertoIguazuPage]
})
export class PuertoIguazuPageModule {}
