import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralPayPageRoutingModule } from './general-pay-routing.module';

import { GeneralPayPage } from './general-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralPayPageRoutingModule
  ],
  declarations: [GeneralPayPage]
})
export class GeneralPayPageModule {}
