import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AddaddressPageRoutingModule } from './addaddress-routing.module';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

import { AddaddressPage } from './addaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBottomDrawerModule,
    AddaddressPageRoutingModule
  ],
  declarations: [AddaddressPage],
  providers: [Geolocation]
})
export class AddaddressPageModule {}
