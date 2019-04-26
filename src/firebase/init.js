import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAap8OWISw_zD0Ku1eFFd62c16TOkaw6t0",
  authDomain: "vue-smoothies-7b5ae.firebaseapp.com",
  databaseURL: "https://vue-smoothies-7b5ae.firebaseio.com",
  projectId: "vue-smoothies-7b5ae",
  storageBucket: "vue-smoothies-7b5ae.appspot.com",
  messagingSenderId: "339729682037"
};
const firebaseApp = firebase.initializeApp(config)

// export firebase db
export default firebaseApp.firestore()