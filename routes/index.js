const express = require("express"); 

const router = express.Router(); 

//Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database 
const db = firebase.firestore();
// Create empty array - push all objects into this array

// Reference to Collections - see cloud firestore -> read data -> get data once
const blogposts = db.collection("blogposts");

// Get Blog post - querying remote database
router.get("/", (req, res) => {
    // Create Empty Array
    const blogpostsArray = [];
    // Get Blogposts
    blogposts
    .get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            blogpostsArray.push(doc.data());
        });
        return res.send(blogpostsArray);
    })  
    .catch(function(error){
        console.log('Error:', error);
        return res.send(error);
        });
    });

module.exports = router;