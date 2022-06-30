import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBvZsuefLinZOPx3LNdL0fkH0Z1jnjBmo",
    authDomain: "financetracker-a92b7.firebaseapp.com",
    projectId: "financetracker-a92b7",
    storageBucket: "financetracker-a92b7.appspot.com",
    messagingSenderId: "694255995160",
    appId: "1:694255995160:web:d3e424adca0987edc2366d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }