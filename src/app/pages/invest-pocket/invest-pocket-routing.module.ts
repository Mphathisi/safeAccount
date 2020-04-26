import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestPocketPage } from './invest-pocket.page';

const routes: Routes = [
  {
    path: '',
    component: InvestPocketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestPocketPageRoutingModule {}
