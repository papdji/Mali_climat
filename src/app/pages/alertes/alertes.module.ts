import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertesPageRoutingModule } from './alertes-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AlertesPage } from './alertes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    IonicModule,
    AlertesPageRoutingModule
  ],
  declarations: [AlertesPage]
})
export class AlertesPageModule {}
