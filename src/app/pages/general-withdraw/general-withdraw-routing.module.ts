import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralWithdrawPage } from './general-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralWithdrawPageRoutingModule {}
