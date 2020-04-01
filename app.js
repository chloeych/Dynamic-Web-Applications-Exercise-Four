// Import Express 
const express = require('express');
// Initiate Express to App 
const app = express(); 
// Set the Port - if environmental.PORT use that, otherwise use 4000;
const port = process.env.PORT || 4000;
// Create base route
app.get('/', (req, res)=> res.send('Exercise Four'));
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