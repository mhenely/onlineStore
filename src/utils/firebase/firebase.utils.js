import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { set } from 'firebase/database';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, provider);


// creating firestore database connection
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // userAuth 
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    // create a user in the DB
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch (error) {
      console.log('Error while creating the user', error.message);
    }
  }
  // if user data does not exist
  return userDocRef;

}