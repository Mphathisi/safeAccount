import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavePocketPageRoutingModule } from './save-pocket-routing.module';

import { SavePocketPage } from './save-pocket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavePocketPageRoutingModule
  ],
  declarations: [SavePocketPage]
})
export class SavePocketPageModule {}
