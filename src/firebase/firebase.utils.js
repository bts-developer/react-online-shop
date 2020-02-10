import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNYs7T3iPhRJR_8xhfP3yYO_LWhymAQKE",
    authDomain: "react-online-shop-demo.firebaseapp.com",
    databaseURL: "https://react-online-shop-demo.firebaseio.com",
    projectId: "react-online-shop-demo",
    storageBucket: "react-online-shop-demo.appspot.com",
    messagingSenderId: "457010495395",
    appId: "1:457010495395:web:efe75ca97fc1745854e416",
    measurementId: "G-NV5XEYFKMG"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;