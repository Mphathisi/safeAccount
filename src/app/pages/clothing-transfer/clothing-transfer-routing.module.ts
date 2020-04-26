import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingTransferPage } from './clothing-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingTransferPageRoutingModule {}
