import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateRestroPage } from './rate-restro.page';

const routes: Routes = [
  {
    path: '',
    component: RateRestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateRestroPageRoutingModule {}
