import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralTransferPage } from './general-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralTransferPageRoutingModule {}
