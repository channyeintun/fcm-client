import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
      apiKey: "AIzaSyBco7beLtakF6pVO0YenHX0ptqe3vE8vc8",
      authDomain: "pledge-ed908.firebaseapp.com",
      databaseURL: "https://pledge-ed908-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "pledge-ed908",
      storageBucket: "pledge-ed908.appspot.com",
      messagingSenderId: "832840225636",
      appId: "1:832840225636:web:65cfc7e1a0799b5ce96071",
      measurementId: "G-B3MKCRTHV7"
};

let firebaseMessaging = null;

if (firebase.messaging.isSupported()) {
   firebase.initializeApp(config);
   firebaseMessaging = firebase.messaging();
}

export { firebaseMessaging };

export const requestFirebaseNotificationPermission = () =>
   new Promise((resolve, reject) => {
      Notification
         .requestPermission()
         .then(() => firebaseMessaging.getToken({vapidKey:'BKbArZjFf1Fl2G_wxexjmtFNW0CurtX0XVgPJ9mKWYPx9iUNnjQukS0HIMLqJZBGEr6hcP8yMazZTgGMH6XqtqU'}))
         .then((firebaseToken) => {
            resolve(firebaseToken);
         })
         .catch((err) => {
            reject(err);
         });
   });