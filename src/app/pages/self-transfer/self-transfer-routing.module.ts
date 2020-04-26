import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfTransferPage } from './self-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: SelfTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfTransferPageRoutingModule {}
