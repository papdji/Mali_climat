import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentPageRoutingModule } from './current-routing.module';

import { CurrentPage } from './current.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    CurrentPageRoutingModule
  ],
  declarations: [CurrentPage]
})
export class CurrentPageModule {}
