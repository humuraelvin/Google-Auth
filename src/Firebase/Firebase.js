import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZo3KUEL7KoL9K8WcvOL-w_Fxa8oI0zjQ",
  authDomain: "auth-c34c6.firebaseapp.com",
  projectId: "auth-c34c6",
  storageBucket: "auth-c34c6.appspot.com",
  messagingSenderId: "442871661499",
  appId: "1:442871661499:web:c9e79141ee78b7c5a47a9e",
  measurementId: "G-PWK4V3BSGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

