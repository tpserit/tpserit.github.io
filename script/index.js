import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { initializeFirebase } from './push-notification';
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();

info_card = document.getElementsByClassName("info-card");
// if (document.getElementById('info-text')) {
//     info_text = self.innerText;
// } else {
//     info_text = "";
// }
info_text = document.getElementById("info-text");


if (info_text.innerText == "") {
    info_card[0].style.display = "none";
} else {
    info_card[0].style.display = "flex";
};