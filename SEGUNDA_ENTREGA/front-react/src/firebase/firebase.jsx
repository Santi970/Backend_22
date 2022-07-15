import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({

    apiKey: "AIzaSyCN6kMW_YQf8hElQPIDyM0cTwZ6Fn5TD9w",
    authDomain: "carritoract.firebaseapp.com",
    projectId: "carritoract",
    storageBucket: "carritoract.appspot.com",
    messagingSenderId: "964521492374",
    appId: "1:964521492374:web:5c343e86dd4a5914b827b7"
    
});

export function getFirebase(){
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

