import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelStoresPage } from './fuel-stores.page';

const routes: Routes = [
  {
    path: '',
    component: FuelStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelStoresPageRoutingModule {}
