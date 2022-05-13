import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const API_KEY_FIREBASE = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: 'tripper-b3df2.firebaseapp.com',
  projectId: 'tripper-b3df2',
  storageBucket: 'tripper-b3df2.appspot.com',
  messagingSenderId: '383011253563',
  appId: '1:383011253563:web:15936d67594601ef56db1e',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
