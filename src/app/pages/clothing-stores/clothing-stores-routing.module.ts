import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingStoresPage } from './clothing-stores.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingStoresPageRoutingModule {}
