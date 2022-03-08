import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, setDoc,  } from 'firebase/firestore';
import { User } from 'src/app/models/User'
import { UserData } from 'src/app/UserData';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  alertes: string;
  
  private user = new User();
  private document: any;
  private auth = getAuth();
  private db = getFirestore();
  fireAuth: any;
  userAuth: any;
  constructor(
  private router: Router,
  private menu: MenuController
  ) {
  }

  public async signWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        this.user.email = user.email;
        this.user.displayName = user.displayName;
        this.user.phoneNumber = user.phoneNumber;
        this.user.photoURL = user.photoURL;
        this.setCurrentUser(this.auth.currentUser);
        setDoc(
          doc(this.db, 'users', user.uid),{
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          }
        ).then((results: any) => {
          this.router.navigateByUrl('profile', {skipLocationChange: true}).then(()=>
          this.router.navigate(['']));
          console.log('Utilisateur ajouter avec succès...', results);
          window.location.reload();
        }).catch(() => {
          console.log("Impossible d'ajouter un utilisateur: ' + error.message");
        });
      }).catch((error) => {
        // Handle Errors here.
        // The email of the user's account used.
        // The AuthCredential type that was used.
    });
  }
  async RegisterUserAuth(userData: UserData, password) {
    let credential: any;
    this.fireAuth.createUserWithEmailAndPassword(userData.email, password)
        .then((res) => {
            localStorage.setItem('userAuth', JSON.stringify(res.user));
            console.log(localStorage.getItem('userAuth'));
            this.userAuth = res.user;
            userData.uid = res.user.uid;
            credential = res.user;
            console.log(userData.uid);

        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
    return credential;
}
  public setCurrentUser(user: User): any {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getDocument(): any {
    return this.document;
  }

  public setDocument(alertes: any){
    this.document = alertes;
  }

  public setPath(uid: string){
    this.alertes = uid;
  }

  public getPath(): string{
    return this.alertes;
  }
  public signOut(){
    this.auth.signOut();
    localStorage.removeItem('user');
    this.menu.close();
    // this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    this.router.navigate(['login']);
    window.location.reload();
  }

}
