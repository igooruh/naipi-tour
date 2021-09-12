import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoBarPageRoutingModule } from './resto-bar-routing.module';

import { RestoBarPage } from './resto-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoBarPageRoutingModule
  ],
  declarations: [RestoBarPage]
})
export class RestoBarPageModule {}
