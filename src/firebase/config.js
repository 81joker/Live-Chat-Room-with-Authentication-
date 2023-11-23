import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6FwhyOvEvAapU7rSccCQ8naR1tUzVUlQ",
    authDomain: "vue-udemy-ninja.firebaseapp.com",
    projectId: "vue-udemy-ninja",
    storageBucket: "vue-udemy-ninja.appspot.com",
    messagingSenderId: "83521593313",
    appId: "1:83521593313:web:776fe014ab930f92773ca0"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore  ,timestamp ,projectAuth }