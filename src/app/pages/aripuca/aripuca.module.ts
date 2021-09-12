import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AripucaPageRoutingModule } from './aripuca-routing.module';

import { AripucaPage } from './aripuca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AripucaPageRoutingModule
  ],
  declarations: [AripucaPage]
})
export class AripucaPageModule {}
