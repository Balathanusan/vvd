import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineMenuPage } from './online-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineMenuPageRoutingModule {}
