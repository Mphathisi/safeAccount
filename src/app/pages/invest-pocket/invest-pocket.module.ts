import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestPocketPageRoutingModule } from './invest-pocket-routing.module';

import { InvestPocketPage } from './invest-pocket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestPocketPageRoutingModule
  ],
  declarations: [InvestPocketPage]
})
export class InvestPocketPageModule {}
