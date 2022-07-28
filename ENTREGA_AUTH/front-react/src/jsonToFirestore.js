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

var products =[  
    {  
       "id":1,
       "category": "camperas",
       "title":"Campera Nike Sportswear",
       "description":"Campera Nike Sportswear Synthetic Fill En Negro Y Blanco",
       "price":16999,   
       "available_quantity": 50,
       "condition": "new",
       "thumbnail": "http://http2.mlstatic.com/D_645369-MLA45629459414_042021-O.jpg",
       
       
    },
    {  
        "id": 2,
        "category": "camperas",
        "title":"Campera Adidas Running",
        "description":"Campera Rompeviento adidas Running Own The Run Hombre Mi Ng",
        "price":10999,
        "available_quantity": 30,
        "condition": "new",
        "thumbnail": "http://http2.mlstatic.com/D_973487-MLA46575256185_072021-O.jpg",
    },
    {  
        "id": 3,
        "category": "camperas",
        "title":"Campera Columbia Hombre",
        "description":"Campera Termica Polar Columbia Fast Trek 2 Hombre Palermo°",
        "price":11999,
        "available_quantity": 20,
        "condition": "new",
        "thumbnail": "http://http2.mlstatic.com/D_724135-MLA31070066621_062019-O.jpg",
        
        
     },
     {  
         "id": 4,
         "category": "camperas",
         "title":"Campera Adidas Mujer",
         "description":"Campera Rompeviento adidas Designed 2 Move Aeroready Ng Go",
         "price":9999,
         "available_quantity": 30,
         "condition": "new",
         "thumbnail": "http://http2.mlstatic.com/D_615107-MLA45954660184_052021-O.jpg",
     },
     {  
        "id":5,
        "category": "camperas",
        "title":"Campera Salomon",
        "description":"Campera Mujer - Salomon - Termico - Discovery Lt Hz",
        "price":15999,
        "available_quantity": 20,
        "condition": "new",
        "thumbnail": "http://http2.mlstatic.com/D_818426-MLA41084086703_032020-O.jpg",
        
        
     },
     {  
         "id":6,
         "category": "camperas",
         "title":"Campera Parka",
         "description":"Campera Parka Impermeable Nieve Sky Hombre The Big Shop",
         "price":8999,
         "available_quantity": 30,
         "condition": "new",
         "thumbnail": "http://http2.mlstatic.com/D_846520-MLA40818358097_022020-O.jpg",
     },
     {  
        "id":7,
        "category": "pantalones",
        "title":"Pantalon Termico",
        "description":"Pantalon Termico Impermeable Niños/as Polar Nieve Jeans710",
        "price":16999,   
        "available_quantity": 50,
        "condition": "new",
        "thumbnail": "https://http2.mlstatic.com/D_710589-MLA45435474510_042021-O.jpg",
        
        
     },
     {  
         "id": 8,
         "category": "pantalones",
         "title":"Pantalón Polar Térmico Lluvia Nieve",
         "description":"Pantalon Termico Impermeable Con Polar Nieve Negro Jeans710",
         "price":11999,
         "available_quantity": 30,
         "condition": "new",
         "thumbnail": "https://http2.mlstatic.com/D_720608-MLA46200476405_052021-O.jpg",
     },
     {  
         "id": 9,
         "category": "pantalones",
         "title":"Campera Mujer Sky",
         "description":"Pantalón Mujer Nieve Ski Snowboard Storm Control",
         "price":10999,
         "available_quantity": 20,
         "condition": "new",
         "thumbnail": "https://http2.mlstatic.com/D_978357-MLA31112376584_062019-O.jpg",
         
         
      },
      {  
          "id": 10,
          "category": "pantalones",
          "title":"pantalon termico",
          "description":"Pantalon Termico Impermeable Con Polar Nieve Lluvia Jeans710",
          "price":7999,
          "available_quantity": 30,
          "condition": "new",
          "thumbnail": "https://http2.mlstatic.com/D_717029-MLA31112814258_062019-O.jpg",
      },
      {  
         "id":11,
         "category": "pantalones",
         "title":"Pantalon Hombre Nieve",
         "description":"Pantalon Hombre Nieve Ski Snowboard Storm Control 2017",
         "price":15999,
         "available_quantity": 20,
         "condition": "new",
         "thumbnail": "https://http2.mlstatic.com/D_717321-MLA45878318166_052021-O.jpg",
         
         
      },
      {  
          "id":12,
          "category": "pantalones",
          "title":"Pantalon Picture Object",
          "description":"Pantalon Picture Object Ski Snow 20k mujer Eco Friendly",
          "price":8999,
          "available_quantity": 30,
          "condition": "new",
          "thumbnail": "https://http2.mlstatic.com/D_670730-MLA40941711119_022020-O.jpg",
      }
 ]

 products.forEach(function(obj) {
    db.collection("products").add({
        id: obj.id,
        category: obj.category,
        title: obj.title,
        description: obj.description,
        price: obj.price,
        available_quantity: obj.available_quantity,
        condition: obj.condition,
        thumbnail: obj.thumbnail
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});