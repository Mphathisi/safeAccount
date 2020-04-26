import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DstvPage } from './dstv.page';

const routes: Routes = [
  {
    path: '',
    component: DstvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DstvPageRoutingModule {}
