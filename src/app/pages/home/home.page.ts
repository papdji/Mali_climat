import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { getDatabase } from "firebase/database";
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadingCtrl: any;
  loading: any;
  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor(public modalCtrl: ModalController, public loadingController: LoadingController) {

   }

  ngOnInit() {}


}
