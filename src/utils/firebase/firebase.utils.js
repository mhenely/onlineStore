import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, GoogleAuthProvider,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, onAuthStateChanged, 
        } from 'firebase/auth';
import { set } from 'firebase/database';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';


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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// creating firestore database connection
export const db = getFirestore();

// populating firebase database with items for sale
export const addCollectionAndDocuments = async(collectionKey, itemsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  itemsToAdd.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  })

  await batch.commit();
} 

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  // gives snapshot of object
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return; 
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
        createdAt,
        ...additionalInfo
      })
    }
    catch (error) {
      console.log('Error while creating the user', error.message);
    }
  }
  // if user data does not exist
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return

  const newUser = await createUserWithEmailAndPassword(auth, email, password)
  return newUser
}


export const signInAuthUserwithEmailAndPassword = async(email, password) => {
  console.log('MARKER MARKER')
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password); 
} 

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      // close listener to prevent memory leak
      unsubscribe();
      resolve(userAuth);
    }, 
    reject
  )
  })
}