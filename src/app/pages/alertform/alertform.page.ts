import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { collection, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore';
import { CurrentWeather } from 'src/app/models/CurrentWeather';

@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.page.html',
  styleUrls: ['./alertform.page.scss'],
})
export class AlertformPage implements OnInit {
  data: CurrentWeather;

  public citys: any;
  public category: any;
  public categorySelected: string;
  public illnessSelected: string;
  private db = getFirestore();
  private loading: any;
  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getalerte();

  }

  public addAlerte(data: any) {
    console.log('Alerte : ', data.value);
  }

  public async getalerte() {
    const q = query(collection(this.db, 'Recommendation'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((alerte) => {
      const id = alerte.id;
      const result = [
        id, alerte.data()
      ];
    });
    this.loading.dismiss();
  }

  public categoryChanged(data: any) {
    const convert = data.value.alerte.split('@');
    this.categorySelected = convert[1];
    const city = document.getElementById('city');
    city.setAttribute('value', '');
    this.presentLoadingDefault();
    this.getCitys(convert);
  }

  public cityChanged(data: any){
    const convert = data.value.city.split('@');
    this.illnessSelected = convert[1];
  }

  public async getCitys(_uid: string) {
    this.citys = [];
    const querySnapshot = await getDocs(
      collection(this.db, 'Alertes')
    );
    querySnapshot.forEach((document) => {
      const id = document.id;
      const result = [
        id, document.data()
      ];
      this.citys.push(result);
    });
    this.loading.dismiss();
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Chargement des données...</span>',
    });
    await this.loading.present();
  }

}


