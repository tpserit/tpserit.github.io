import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXX"
  });
}
export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Your token is:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }