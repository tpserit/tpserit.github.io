const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");
const config = {
  apiKey: "AAAAl-O45CE:APA91bGkKLP48urtgnPqKvMJqBaqA6XCQ4lK82bUmainCXEypXkHjWoLSjD9AehxjcUMRNUFDSRsJzUwZ8jj5aO97l3sKTbRj9oIZzemWoqF8exVfCtpT2Td0SpZTSK98f7lLoz_i23p",
  authDomain: "bktest-d2bb9.firebaseapp.com",
  projectId: "bktest-d2bb9",
  storageBucket: "bktest-d2bb9.appspot.com",
  messagingSenderId: "652360606753",
  appId: "1:652360606753:web:bd36dd70e24f030850ef60",
  measurementId: "G-GF94RPR1S7"
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