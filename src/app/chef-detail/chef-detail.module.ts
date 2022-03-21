import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { ChefDetailPageRoutingModule } from './chef-detail-routing.module';

import { ChefDetailPage } from './chef-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,
    ChefDetailPageRoutingModule
  ],
  declarations: [ChefDetailPage]
})
export class ChefDetailPageModule {}
 