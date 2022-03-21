import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsercreationPageRoutingModule } from './usercreation-routing.module';

import { UsercreationPage } from './usercreation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsercreationPageRoutingModule
  ],
  declarations: [UsercreationPage]
})
export class UsercreationPageModule {}
