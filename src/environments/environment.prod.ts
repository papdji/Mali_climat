import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'changement-climatique-3e1a1',
    appId: '1:560493908001:web:5e60a777bdd268d8db5360',
    databaseURL: 'https://changement-climatique-3e1a1-default-rtdb.firebaseio.com',
    storageBucket: 'changement-climatique-3e1a1.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCuJu7sBCI8vw1fIrBaDCn8NvFRg6jqxNI',
    authDomain: 'changement-climatique-3e1a1.firebaseapp.com',
    messagingSenderId: '560493908001',
    measurementId: 'G-1KCB685R77',
  },
  production: true,
  API_URL: 'https://api.weatherapi.com/v1/',
  API_KEY: '6e4fdb97cfc54e6d968201248221002',
  DEFAULT_CITY:'Bamako',

};
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
