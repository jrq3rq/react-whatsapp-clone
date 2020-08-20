import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwrVF5k2hSU_Ie9Jb2OIDm_wax66g5ryg",
  authDomain: "whatsapp-clone-53272.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-53272.firebaseio.com",
  projectId: "whatsapp-clone-53272",
  storageBucket: "whatsapp-clone-53272.appspot.com",
  messagingSenderId: "384616117554",
  appId: "1:384616117554:web:64ff113bdc1b533b4c932b",
  measurementId: "G-B2SP7LXMEX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
