import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { AuthserviceService } from 'src/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private db = getFirestore();
  private auth = getAuth();
  confirmationResult: any;
  user: any;
  recaptchaVerifier: any;
  constructor(
   public authService: AuthserviceService,
    private router: Router,

    ) {}


  ngOnInit() {
  }
  public async signWithGoogle(){
    await this.authService.signWithGoogle();
  }
  public signInWithPhone(data: any){
    this.auth.languageCode = 'fr';
    console.log(data.value);
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        console.log('Response : ', response);
        this.user.displayName = data.value.firstName+' '+data.value.lastName;
        this.user.phoneNumber = data.value.phone;
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
      'expired-callback': (error) => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log('Expire error : ', error);
      }
    }, this.auth);

    signInWithPhoneNumber(this.auth, data.value.phone, this.recaptchaVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.confirmationResult = confirmationResult;
      console.log('confirmation result : ', this.confirmationResult);
    }).catch((error) => {
      // Error; SMS not sent
      console.log('SMS pas envoyer : ', error);
    });
  }

  public checkConfirmationCode(data: any){
    this.confirmationResult.confirm(data.value.code).then( async (result) => {
      // User signed in successfully.
      const user = result.user;
      this.setCurrentUser(this.auth.currentUser);
      const docRef = doc(this.db, '/users/', user.uid);
      const snapDoc = await getDoc(docRef);
      // const foundUser
      if (!snapDoc.exists()) {
        setDoc(
          doc(this.db, 'users', user.uid), {
            displayName: this.user.displayName,
            phoneNumber: this.user.phoneNumber,
            photoURL: this.user.photoURL
          }
        );
        console.log(this.user);
      }else {
        console.log('User already exists');
      }

      this.router.navigateByUrl('/profile');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log('Error: ', error);
    });

  }
  onLoginSuccess() {
    this.router.navigate(['/profile']);}


  public setCurrentUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }
}
