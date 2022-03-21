import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopsearchPage } from './topsearch.page';

const routes: Routes = [
  {
    path: '',
    component: TopsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopsearchPageRoutingModule {}
