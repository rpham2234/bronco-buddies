// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
// Routes
app.get('/', (req, res) => {
    res.send('Welcome to our time management bot lmao');
  });
// Start Server

app.listen(3000, () => {
  console.log('App listening on port localhost:3000!');
});