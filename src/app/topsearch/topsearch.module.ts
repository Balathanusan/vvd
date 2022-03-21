import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopsearchPageRoutingModule } from './topsearch-routing.module';

import { TopsearchPage } from './topsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopsearchPageRoutingModule
  ],
  declarations: [TopsearchPage]
})
export class TopsearchPageModule {}
