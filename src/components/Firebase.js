import * as firebase from 'firebase';

const settings = {timestampInSnapshots: true};


const firebaseConfig = {
  apiKey: "AIzaSyCkJOLySetfjT54EFQGyGSPWkaB5Pnaujw",
  authDomain: "buycell-b75e7.firebaseapp.com",
  databaseURL: "https://buycell-b75e7.firebaseio.com",
  projectId: "buycell-b75e7",
  storageBucket: "buycell-b75e7.appspot.com",
  messagingSenderId: "836685532031",
  appId: "1:836685532031:web:b102d5c9693046d210684a"
};

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;

