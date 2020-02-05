import app from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtHFtq9b1EqpmOudMvfNr6z8bJzRXP938",
  authDomain: "react-homes.firebaseapp.com",
  databaseURL: "https://react-homes.firebaseio.com",
  projectId: "react-homes",
  storageBucket: "react-homes.appspot.com",
  messagingSenderId: "268174000045",
  appId: "1:268174000045:web:79ec6a7e085d9a9d54ab24",
  measurementId: "G-5GE8S9V8GE"
};

class FirebaseServer {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

export default FirebaseServer;
