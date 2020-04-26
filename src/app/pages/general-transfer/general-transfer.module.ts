import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralTransferPageRoutingModule } from './general-transfer-routing.module';

import { GeneralTransferPage } from './general-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralTransferPageRoutingModule
  ],
  declarations: [GeneralTransferPage]
})
export class GeneralTransferPageModule {}
