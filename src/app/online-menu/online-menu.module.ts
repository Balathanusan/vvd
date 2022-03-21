import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { OnlineMenuPageRoutingModule } from './online-menu-routing.module';

import { OnlineMenuPage } from './online-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,
    OnlineMenuPageRoutingModule
  ],
  declarations: [OnlineMenuPage]
})
export class OnlineMenuPageModule {}
