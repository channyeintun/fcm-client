importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');


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


if (firebase.messaging.isSupported()) {
   firebase.initializeApp(config);
   const messaging = firebase.messaging();
}