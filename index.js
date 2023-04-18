const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");
const config = {
      
    apiKey: "AIzaSyDuqHcMxy8_zSSTMWsjSJae-epC6sHYgTY",

    authDomain: "bktest-d2bb9.firebaseapp.com",

    projectId: "bktest-d2bb9",

    storageBucket: "bktest-d2bb9.appspot.com",

    messagingSenderId: "652360606753",

    appId: "1:652360606753:web:e287451c05560f0050ef60",

    measurementId: "G-45TVMHENPV"

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
  
  