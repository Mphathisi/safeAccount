import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelStoresPageRoutingModule } from './fuel-stores-routing.module';

import { FuelStoresPage } from './fuel-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelStoresPageRoutingModule
  ],
  declarations: [FuelStoresPage]
})
export class FuelStoresPageModule {}
