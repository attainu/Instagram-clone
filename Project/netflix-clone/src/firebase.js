import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCWwZAfT_2YPb6_Zy_bcPhODMTsP_an1Tc",
  authDomain: "netflix-clone-42644.firebaseapp.com",
  databaseURL: "https://netflix-clone-42644.firebaseio.com",
  projectId: "netflix-clone-42644",
  storageBucket: "netflix-clone-42644.appspot.com",
  messagingSenderId: "431911785449",
  appId: "1:431911785449:web:e5c77a25fe716f78b8b178",
  measurementId: "G-E7EEZSDCJ1",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
// export { db, auth, storage };
export { auth };

export default firebaseConfig;
// export default db;
