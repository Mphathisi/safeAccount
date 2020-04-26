import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralPayPage } from './general-pay.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralPayPageRoutingModule {}
