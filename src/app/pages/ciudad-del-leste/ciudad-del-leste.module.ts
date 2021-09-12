import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadDelLestePageRoutingModule } from './ciudad-del-leste-routing.module';

import { CiudadDelLestePage } from './ciudad-del-leste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiudadDelLestePageRoutingModule
  ],
  declarations: [CiudadDelLestePage]
})
export class CiudadDelLestePageModule {}
