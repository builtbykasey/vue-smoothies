import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {

};
const firebaseApp = firebase.initializeApp(config)

// export firebase db
export default firebaseApp.firestore()
