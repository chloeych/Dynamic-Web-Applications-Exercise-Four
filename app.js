// Import Express 
const express = require('express');
// Initiate Express to App 
const app = express(); 
// Set the Port
const port = 4000;
// Create base route
app.get('/', (req, res)=> res.send('Exercise Four'));
// Set up app so that it runs when this file is run 
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
);