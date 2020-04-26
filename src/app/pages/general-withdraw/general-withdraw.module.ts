import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralWithdrawPageRoutingModule } from './general-withdraw-routing.module';

import { GeneralWithdrawPage } from './general-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralWithdrawPageRoutingModule
  ],
  declarations: [GeneralWithdrawPage]
})
export class GeneralWithdrawPageModule {}
