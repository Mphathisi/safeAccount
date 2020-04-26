import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfTransferPageRoutingModule } from './self-transfer-routing.module';

import { SelfTransferPage } from './self-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfTransferPageRoutingModule
  ],
  declarations: [SelfTransferPage]
})
export class SelfTransferPageModule {}
