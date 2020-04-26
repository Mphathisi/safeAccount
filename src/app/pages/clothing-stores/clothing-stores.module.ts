import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingStoresPageRoutingModule } from './clothing-stores-routing.module';

import { ClothingStoresPage } from './clothing-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingStoresPageRoutingModule
  ],
  declarations: [ClothingStoresPage]
})
export class ClothingStoresPageModule {}
