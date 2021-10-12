import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAynzynrw20uGqXrd_T8w9eLZS_sDFQvwM",
  authDomain: "budha-97e1d.firebaseapp.com",
  databaseURL: "https://budha-97e1d-default-rtdb.firebaseio.com",
  projectId: "budha-97e1d",
  storageBucket: "budha-97e1d.appspot.com",
  messagingSenderId: "153901784278",
  appId: "1:153901784278:web:2812897aceb475f4a83d77"
};


firebase.initializeApp(config);

export default firebase.database();