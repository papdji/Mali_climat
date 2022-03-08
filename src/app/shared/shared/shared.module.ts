import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaferPipe } from 'src/app/pipes/safer.pipe';
import { IonicModule } from '@ionic/angular';
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe';



@NgModule({
  declarations: [SaferPipe, CustomDatePipe],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [SaferPipe, CustomDatePipe]
})
export class SharedModule { }
