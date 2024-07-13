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

export const auth = getAuth(app);
const provider = GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {

        const user_name = result.user.displayName;
        const user_email = result.user.email
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", user_name);
        localStorage.setItem("email", user_email);
        localStorage.setItem("profilePicture", profilePic);

    }).catch((error) => {
        console.log(error);
        alert(error);
    })
}

