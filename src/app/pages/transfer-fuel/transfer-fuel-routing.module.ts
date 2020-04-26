import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferFuelPage } from './transfer-fuel.page';

const routes: Routes = [
  {
    path: '',
    component: TransferFuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferFuelPageRoutingModule {}
