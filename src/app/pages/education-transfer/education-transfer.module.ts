import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationTransferPageRoutingModule } from './education-transfer-routing.module';

import { EducationTransferPage } from './education-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationTransferPageRoutingModule
  ],
  declarations: [EducationTransferPage]
})
export class EducationTransferPageModule {}
