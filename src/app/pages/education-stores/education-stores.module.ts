import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationStoresPageRoutingModule } from './education-stores-routing.module';

import { EducationStoresPage } from './education-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationStoresPageRoutingModule
  ],
  declarations: [EducationStoresPage]
})
export class EducationStoresPageModule {}
