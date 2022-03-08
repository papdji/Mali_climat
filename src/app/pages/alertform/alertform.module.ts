import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertformPageRoutingModule } from './alertform-routing.module';

import { AlertformPage } from './alertform.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    IonicModule,
    AlertformPageRoutingModule
  ],
  declarations: [AlertformPage]
})
export class AlertformPageModule {}
