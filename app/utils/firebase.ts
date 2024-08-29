import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const prodConfig = {
      apiKey: "AIzaSyD2-Sq4HrU1Wm_bJ32JgrSx3jWi5CaQdW8",
      authDomain: "bamboos-80873.firebaseapp.com",
      projectId: "bamboos-80873",
      storageBucket: "bamboos-80873.appspot.com",
      messagingSenderId: "313748705255",
      appId: "1:313748705255:web:206c06cb94712fa20a7742",
      measurementId: "G-0QJNE3ST97",
};
// Initialize Firebase
const app = initializeApp(prodConfig);

const db = getFirestore(app);

export default db;
