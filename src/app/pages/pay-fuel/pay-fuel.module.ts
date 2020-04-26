import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayFuelPageRoutingModule } from './pay-fuel-routing.module';

import { PayFuelPage } from './pay-fuel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayFuelPageRoutingModule
  ],
  declarations: [PayFuelPage]
})
export class PayFuelPageModule {}
