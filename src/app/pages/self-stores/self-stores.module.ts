import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfStoresPageRoutingModule } from './self-stores-routing.module';

import { SelfStoresPage } from './self-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfStoresPageRoutingModule
  ],
  declarations: [SelfStoresPage]
})
export class SelfStoresPageModule {}
