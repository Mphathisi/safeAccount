import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingPayPageRoutingModule } from './clothing-pay-routing.module';

import { ClothingPayPage } from './clothing-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingPayPageRoutingModule
  ],
  declarations: [ClothingPayPage]
})
export class ClothingPayPageModule {}
