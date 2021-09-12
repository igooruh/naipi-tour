import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataratasPageRoutingModule } from './cataratas-routing.module';

import { CataratasPage } from './cataratas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataratasPageRoutingModule
  ],
  declarations: [CataratasPage]
})
export class CataratasPageModule {}
