import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Old configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAFiOWLpzGkHAbbEwD2EZqg7gkmwk7t7mY",
//     authDomain: "sih-super-set-dev.firebaseapp.com",
//     projectId: "sih-super-set-dev",
//     storageBucket: "sih-super-set-dev.appspot.com",
//     messagingSenderId: "59512936420",
//     appId: "1:59512936420:web:7318c5953be951659759f1"
//   };

// New configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYC7_yReYQZJWTl1O9n3auL9pRCZQp4A4",
  authDomain: "fih-superset-dev.firebaseapp.com",
  projectId: "fih-superset-dev",
  storageBucket: "fih-superset-dev.appspot.com",
  messagingSenderId: "1058242616848",
  appId: "1:1058242616848:web:174bd703414e9382fb3495",
  measurementId: "G-LZJMRQWNJS"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };