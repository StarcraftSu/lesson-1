import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config  = {
    apiKey: "AIzaSyAaICNrgk4KaY0WdXHP3UfZNo-7T8Eap_g",
    authDomain: "crwn-db-cb2c2.firebaseapp.com",
    databaseURL: "https://crwn-db-cb2c2.firebaseio.com",
    projectId: "crwn-db-cb2c2",
    storageBucket: "crwn-db-cb2c2.appspot.com",
    messagingSenderId: "1014942154944",
    appId: "1:1014942154944:web:8e04c54098cb85fe136d25"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;