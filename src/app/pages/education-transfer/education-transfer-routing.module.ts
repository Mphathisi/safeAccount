import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationTransferPage } from './education-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: EducationTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationTransferPageRoutingModule {}
