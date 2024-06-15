import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCRN0uGvuJQF3k8pEepGwtQlNaXdkNcg0",
  authDomain: "online-store-d2987.firebaseapp.com",
  projectId: "online-store-d2987",
  storageBucket: "online-store-d2987.appspot.com",
  messagingSenderId: "458693908358",
  appId: "1:458693908358:web:52659c56f16ec5b366be07"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});