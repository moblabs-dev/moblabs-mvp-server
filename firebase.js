import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import config from "./config.js";

firebase.initializeApp(config.firebaseConfig);

export default firebase;