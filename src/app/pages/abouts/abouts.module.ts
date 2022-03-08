import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutsPageRoutingModule } from './abouts-routing.module';

import { AboutsPage } from './abouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutsPageRoutingModule
  ],
  declarations: [AboutsPage]
})
export class AboutsPageModule {}
