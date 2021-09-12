import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuinchoTioQueridoPageRoutingModule } from './quincho-tio-querido-routing.module';

import { QuinchoTioQueridoPage } from './quincho-tio-querido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuinchoTioQueridoPageRoutingModule
  ],
  declarations: [QuinchoTioQueridoPage]
})
export class QuinchoTioQueridoPageModule {}
