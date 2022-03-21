import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsercreationPage } from './usercreation.page';

const routes: Routes = [
  {
    path: '',
    component: UsercreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsercreationPageRoutingModule {}
