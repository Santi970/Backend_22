const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCN6kMW_YQf8hElQPIDyM0cTwZ6Fn5TD9w",
    authDomain: "carritoract.firebaseapp.com",
    projectId: "carritoract",
    
  });
  
var db = firebase.firestore();

var orders =
    {
    buyer: {
        name: 'santiago',
        phone: 11554433,
        email: 'santiago@gmail.com'
    },
    items: [
        {
        id: 1,
        title: 'Campera Nike Sportswear',
        },
        {
        id: 2,
        title: 'Campera Adidas Running',
        }],
    total: 10999  
    }

 
    db.collection("orders").add(
        orders
        ).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
;