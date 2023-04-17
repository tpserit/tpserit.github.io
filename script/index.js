const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDuqHcMxy8_zSSTMWsjSJae-epC6sHYgTY",
  
    authDomain: "bktest-d2bb9.firebaseapp.com",
  
    projectId: "bktest-d2bb9",
  
    storageBucket: "bktest-d2bb9.appspot.com",
  
    messagingSenderId: "652360606753",
  
    appId: "1:652360606753:web:3eda13474ee78c9750ef60",
  
    measurementId: "G-VZX3F0LHJH"
  
  };
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
  });
  

