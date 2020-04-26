import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingPayPage } from './clothing-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ClothingPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothingPayPageRoutingModule {}
