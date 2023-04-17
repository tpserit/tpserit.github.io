importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDuqHcMxy8_zSSTMWsjSJae-epC6sHYgTY",

    authDomain: "bktest-d2bb9.firebaseapp.com",

    projectId: "bktest-d2bb9",

    storageBucket: "bktest-d2bb9.appspot.com",

    messagingSenderId: "652360606753",

    appId: "1:652360606753:web:3eda13474ee78c9750ef60",

    measurementId: "G-VZX3F0LHJH"

});
const messaging = firebase.messaging();