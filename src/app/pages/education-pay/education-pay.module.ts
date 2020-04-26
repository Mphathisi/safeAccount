import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPayPageRoutingModule } from './education-pay-routing.module';

import { EducationPayPage } from './education-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationPayPageRoutingModule
  ],
  declarations: [EducationPayPage]
})
export class EducationPayPageModule {}
