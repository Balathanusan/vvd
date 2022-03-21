import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglesearchPage } from './googlesearch.page';

const routes: Routes = [
  {
    path: '',
    component: GooglesearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooglesearchPageRoutingModule {}
