const express = require('express');
const firebase = require('firebase-admin');

const app = express();
const port = process.env.PORT || 5000;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWW9epGyvaXH56fzG_A5gAHafge0YlJDs",
  authDomain: "sl-marketplace-e9c43.firebaseapp.com",
  projectId: "sl-marketplace-e9c43",
  storageBucket: "sl-marketplace-e9c43.appspot.com",
  messagingSenderId: "944756687724",
  appId: "1:944756687724:web:e68bd588adc53120202949",
  measurementId: "G-NF2XQY9PNY"
};

firebase.initializeApp(firebaseConfig);

// Example route to retrieve data from Firebase
app.get('/api/products', (req, res) => {
  firebase.database().ref('products').once('value', (snapshot) => {
    res.json(snapshot.val());
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
