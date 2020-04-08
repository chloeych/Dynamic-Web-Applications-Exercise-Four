// Import Express 
const express = require('express');

// Initiate Express to App 
const app = express(); 
// Set the Port - if environmental.PORT use that, otherwise use 4000;
const port = process.env.PORT || 4000;



//Require Firebase
const firebase = require('firebase');

// get configuration object so we can communicate with Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB_PcWgQ9V9f1vflY-2wa_4F3VYtqS_deI",
    authDomain: "exercise-4-1708d.firebaseapp.com",
    databaseURL: "https://exercise-4-1708d.firebaseio.com",
    projectId: "exercise-4-1708d",
    storageBucket: "exercise-4-1708d.appspot.com",
    messagingSenderId: "990670199477",
    appId: "1:990670199477:web:68c4566b23d009f7d4bcfc"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore Database 
const db = firebase.firestore();


// Create empty array
const blogpostsArray = [];

// Get Blog post - querying remote database
const blogposts = db
.collection('blogposts')
.get()
.then((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        // push document into array every time the query loops over existing articles
        blogpostsArray.push(doc.data());
    });
})  
.catch(function(error){
    console.log('Error', error);
});

// Create base route
// send JSON array as a response
app.get('/', (req, res)=> 
    res.send(blogpostsArray)
    );
    
// Set up app so that it runs when this file is run 
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
);


// Cloud Server Hosing 

// * Important that information is shared on the same port 
// * Dyno - Instance of a cloud server
// * Specify a port variable that they will set automatically for you
// * $PORT is a dynamic value that is set automatically 
// * Make sure you're not hardcoding the 'port' 


// https://blueberry-sundae-97148.herokuapp.com/