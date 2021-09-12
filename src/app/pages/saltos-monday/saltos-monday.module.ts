import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaltosMondayPageRoutingModule } from './saltos-monday-routing.module';

import { SaltosMondayPage } from './saltos-monday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaltosMondayPageRoutingModule
  ],
  declarations: [SaltosMondayPage]
})
export class SaltosMondayPageModule {}
