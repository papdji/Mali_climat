import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastPageRoutingModule } from './forecast-routing.module';

import { ForecastPage } from './forecast.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    ForecastPageRoutingModule
  ],
  declarations: [ForecastPage]
})
export class ForecastPageModule {}
