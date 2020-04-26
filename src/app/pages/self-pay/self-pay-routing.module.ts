import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfPayPage } from './self-pay.page';

const routes: Routes = [
  {
    path: '',
    component: SelfPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfPayPageRoutingModule {}
