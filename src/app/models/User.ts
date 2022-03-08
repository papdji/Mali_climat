export class User {
  displayName: string;
  email: string;
  photoURL = 'https://firebasestorage.googleapis.com/v0/b/changement-climatique-3e1a1.appspot.com/o/localites%2Fadmin.jpg?alt=media&token=05a8706e-ff2a-4157-8abd-a633910b3adc';
  phoneNumber: string;

}export interface User{
  displayName: string;
  email: string

  // country: string;
  // city: string;
  // gender: string;
  // profile: string;
  // CountryPhone: string;
  // phone: number;
  // password: string;
  // confirm_password: string;
}
export interface Alerts{
  city: string;
  categorie: string;
  description: string;
}
export interface UserProfile {
  email: string;
  fullName: string;
}


