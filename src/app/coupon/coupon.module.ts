import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { CouponPageRoutingModule } from './coupon-routing.module';

import { CouponPage } from './coupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    CouponPageRoutingModule
  ],
  declarations: [CouponPage]
})
export class CouponPageModule {}
 