import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayFuelPage } from './pay-fuel.page';

const routes: Routes = [
  {
    path: '',
    component: PayFuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayFuelPageRoutingModule {}
