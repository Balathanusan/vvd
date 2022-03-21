import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { RefinePageRoutingModule } from './refine-routing.module';

import { RefinePage } from './refine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,
    RefinePageRoutingModule
  ],
  declarations: [RefinePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class RefinePageModule {}
