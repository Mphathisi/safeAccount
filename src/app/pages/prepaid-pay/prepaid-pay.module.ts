import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepaidPayPageRoutingModule } from './prepaid-pay-routing.module';

import { PrepaidPayPage } from './prepaid-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepaidPayPageRoutingModule
  ],
  declarations: [PrepaidPayPage]
})
export class PrepaidPayPageModule {}
