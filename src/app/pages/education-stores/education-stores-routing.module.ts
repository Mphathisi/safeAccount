import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationStoresPage } from './education-stores.page';

const routes: Routes = [
  {
    path: '',
    component: EducationStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationStoresPageRoutingModule {}
