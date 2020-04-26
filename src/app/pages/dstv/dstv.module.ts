import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DstvPageRoutingModule } from './dstv-routing.module';

import { DstvPage } from './dstv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DstvPageRoutingModule
  ],
  declarations: [DstvPage]
})
export class DstvPageModule {}
