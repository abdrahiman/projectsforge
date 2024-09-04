import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const prodConfig = {
      apiKey: process.env.API_KEY,
      appId: process.env.APP_ID,
      authDomain: process.env.PROJ_ID + ".firebaseapp.com",
      projectId: process.env.PROJ_ID,
      storageBucket: process.env.PROJ_ID + ".appspot.com",
      messagingSenderId: "313748705255",
      measurementId: "G-0QJNE3ST97",
};
// Initialize Firebase
const app = initializeApp(prodConfig);

const db = getFirestore(app);

export default db;
