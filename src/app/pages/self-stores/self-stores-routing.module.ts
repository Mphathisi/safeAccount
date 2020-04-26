import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfStoresPage } from './self-stores.page';

const routes: Routes = [
  {
    path: '',
    component: SelfStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfStoresPageRoutingModule {}
