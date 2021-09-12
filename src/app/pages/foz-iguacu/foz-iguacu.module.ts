import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FozIguacuPageRoutingModule } from './foz-iguacu-routing.module';

import { FozIguacuPage } from './foz-iguacu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FozIguacuPageRoutingModule
  ],
  declarations: [FozIguacuPage]
})
export class FozIguacuPageModule {}
