import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyCgxcSkYxXNo0Qx5taBHWLTKNSwKexCHac",
  authDomain: "crwn-clothing-88366.firebaseapp.com",
  databaseURL: "https://crwn-clothing-88366.firebaseio.com",
  projectId: "crwn-clothing-88366",
  storageBucket: "crwn-clothing-88366.appspot.com",
  messagingSenderId: "580000224586",
  appId: "1:580000224586:web:36a4fad5b7ac8f56b7ddb3",
  measurementId: "G-ML4WG2PBWN"
};
export const createUserProfileDocument = async(userAuth,additionalData)=>{
  if(!userAuth)return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName,email} = userAuth;
   
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creationg user',err.message);
    }
    console.log(userRef)
   
  }
  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
