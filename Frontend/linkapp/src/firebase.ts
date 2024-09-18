import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDltHI-VafNyWwk_ZcGjmic_gKWRoeT5rI",
  authDomain: "linkapp-388ba.firebaseapp.com",
  projectId: "linkapp-388ba",
  storageBucket: "linkapp-388ba.appspot.com",
  messagingSenderId: "842347579736",
  appId: "1:842347579736:web:10ce9bfca5bab5fc38bd2d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
