import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { GestureController, LoadingController } from '@ionic/angular';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';

import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { CurrentWeather } from 'src/app/models/CurrentWeather';

@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.page.html',
  styleUrls: ['./alertform.page.scss'],
})
export class AlertformPage implements OnInit, AfterViewInit {
  recording = false;
  storedFileNames = [];
  durationDisplay = '';
  duration = 0;
  @ViewChild('recordbtn', { read: ElementRef }) recordbtn: ElementRef;
  data: CurrentWeather;

  public citys: any;
  public category: any;
  public categorySelected: string;
  public illnessSelected: string;
  private db = getFirestore();
  private loading: any;
  constructor(
    private loadingCtrl: LoadingController, private gestureCtrl: GestureController
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getalerte();

    this.loadFiles();
    VoiceRecorder.requestAudioRecordingPermission();

    const img = document.getElementById('img');
    img.addEventListener('change', (e) => {
      console.log(e.target['files'][0]);
    });

  }
  ngAfterViewInit() {
    const longpress = this.gestureCtrl.create(
      {
        el: this.recordbtn.nativeElement,
        threshold: 0,
        gestureName: 'long-press',
        onStart: (ev) => {
          Haptics.impact({ style: ImpactStyle.Light });
          this.startRecording();
        },
        onEnd: (ev) => {
          Haptics.impact({ style: ImpactStyle.Light });
          this.stopRecording();
        },
      },
      true
    );
    longpress.enable();
  }

  calculateDuration() {
    if (!this.recording) {
      this.duration = 0;
      this.durationDisplay = '';
      return;
    }
    this.duration += 1;
    const minutes = Math.floor(this.duration / 60);
    const seconds = (this.duration % 60).toString().padStart(2, '0');
    this.durationDisplay = `${minutes}:${seconds}`;

    setTimeout(() => {
      this.calculateDuration();
    }, 1000);
  }

  async loadFiles() {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data,
    }).then((result) => {
      this.storedFileNames = result.files;
    });
  }

  startRecording() {
    if (this.recording) {
      return;
    }

    this.recording = true;
    VoiceRecorder.startRecording();
  }

  stopRecording() {
    if (!this.recording) {
      return;
    }
    VoiceRecorder.stopRecording().then(async (result: RecordingData) => {
      this.recording = false
      if (result.value && result.value.recordDataBase64) {
        const recordData = result.value.recordDataBase64;

        const fileName = new Date().getTime() + '.wav';

        await Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data: recordData,
        }).then(async (resultat) => {
          // await addDoc(collection(getFirestore(), 'Enreg/'), {
          //   enreg: result
          // });

          // const filePath = 'Stockage/great';
          // const newImageRef = ref(getStorage(), filePath);
          // const fileSnapshot = await uploadBytesResumable(newImageRef, resultat);
        });

      }
    });
  }

  async playFile(fileName) {
    const audioFile = await Filesystem.readFile({
      path: fileName,
      directory: Directory.Data,
    });

    const base64Sound = audioFile.data;

    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
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

  public cityChanged(data: any) {
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


