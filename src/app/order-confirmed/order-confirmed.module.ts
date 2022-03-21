import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { OrderConfirmedPageRoutingModule } from './order-confirmed-routing.module';

import { OrderConfirmedPage } from './order-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    OrderConfirmedPageRoutingModule
  ],
  declarations: [OrderConfirmedPage]
})
export class OrderConfirmedPageModule {}
 