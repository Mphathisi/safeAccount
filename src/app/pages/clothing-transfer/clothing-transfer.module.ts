import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingTransferPageRoutingModule } from './clothing-transfer-routing.module';

import { ClothingTransferPage } from './clothing-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingTransferPageRoutingModule
  ],
  declarations: [ClothingTransferPage]
})
export class ClothingTransferPageModule {}
