import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { ProductlistPageRoutingModule } from './productlist-routing.module';

import { ProductlistPage } from './productlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ProductlistPageRoutingModule
  ],
  declarations: [ProductlistPage]
})
export class ProductlistPageModule {}
