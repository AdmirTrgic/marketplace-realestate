// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALvi1iTxoVTBZpym9wj4d30vWNKAP0qVQ',
  authDomain: 'marketplace-app-a3ff3.firebaseapp.com',
  projectId: 'marketplace-app-a3ff3',
  storageBucket: 'marketplace-app-a3ff3.appspot.com',
  messagingSenderId: '682251177320',
  appId: '1:682251177320:web:4db12ab5d370bb1d29dadd',
  measurementId: 'G-61LYWK20E4',
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
