import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaffainPageRoutingModule } from './raffain-routing.module';

import { RaffainPage } from './raffain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaffainPageRoutingModule
  ],
  declarations: [RaffainPage]
})
export class RaffainPageModule {}
