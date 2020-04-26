import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferFuelPageRoutingModule } from './transfer-fuel-routing.module';

import { TransferFuelPage } from './transfer-fuel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferFuelPageRoutingModule
  ],
  declarations: [TransferFuelPage]
})
export class TransferFuelPageModule {}
