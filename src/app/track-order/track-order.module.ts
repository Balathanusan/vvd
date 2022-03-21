import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
     	
import { IonicModule } from '@ionic/angular';

import { TrackOrderPageRoutingModule } from './track-order-routing.module';

import { TrackOrderPage } from './track-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    TrackOrderPageRoutingModule
  ],
  declarations: [TrackOrderPage]
})
export class TrackOrderPageModule {}
