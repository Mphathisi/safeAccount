import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavePocketPage } from './save-pocket.page';

const routes: Routes = [
  {
    path: '',
    component: SavePocketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavePocketPageRoutingModule {}
