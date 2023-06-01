// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = 'AIzaSyCsmCxnLn8Q4f8wo_l4s1Ey6E2FGv9qWw4'

const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: "kush-clothing-db.firebaseapp.com",
  projectId: "kush-clothing-db",
  storageBucket: "kush-clothing-db.appspot.com",
  messagingSenderId: "690717355550",
  appId: "1:690717355550:web:68a2c6ec83874184be880f"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  'display': 'popup'
});
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const signInWithGithubPopup = () => signInWithPopup(auth, gitHubProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider)


export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objects.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });
  await batch.commit();
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

export const createUserDocument = async (userAuth, misc={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...misc
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userDocRef;

}

export const createAuthUserwithSignUp = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);