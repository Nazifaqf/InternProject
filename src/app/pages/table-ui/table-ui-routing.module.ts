import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableUIPage } from './table-ui.page';

const routes: Routes = [
  {
    path: '',
    component: TableUIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableUIPageRoutingModule {}
