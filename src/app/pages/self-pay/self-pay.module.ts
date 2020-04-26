import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfPayPageRoutingModule } from './self-pay-routing.module';

import { SelfPayPage } from './self-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfPayPageRoutingModule
  ],
  declarations: [SelfPayPage]
})
export class SelfPayPageModule {}
