import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'recommendation', url: '/recommendation', icon: 'folder' },
    { title: 'A propos', url: '/abouts', icon: 'stats-chart' },
    { title: 'Confidentialité', url: '/confidentialite', icon: 'create' },
    { title: 'Connexion', url: '/login', icon: 'person' }
  ];
  public labels = ['Test'];
  public currentUser: any;
  public dark = false;


  constructor(private platform: Platform,
    private menu: MenuController,
    )
    {
      this.currentUser = this.getUser();
    }
  getUser(): any {

  }

    public closeMenu(){
      this.menu.close();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        
      });
    }


}
