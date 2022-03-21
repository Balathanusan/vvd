import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { RateRestroPageRoutingModule } from './rate-restro-routing.module';

import { RateRestroPage } from './rate-restro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,	  
    RateRestroPageRoutingModule
  ],
  declarations: [RateRestroPage]
})
export class RateRestroPageModule {}
