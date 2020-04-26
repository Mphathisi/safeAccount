import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPayPage } from './education-pay.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPayPageRoutingModule {}
