// Require Libraries
const express = require('express');

// App Setup
const app = express();

const { displayData } = require("./components/broncobackend/algo");// return object and exports are properties

// Middleware
/*
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
*/

// Routes
app.get('/api', (req, res) => {
    URLSearchParams.get(arr);
    console.log(arr);
    res.send(assignSchedules(arr));
  });
//Start Server

app.use('/', express.static('./components/public'));

app.listen(3000, () => {
  console.log('App listening on port localhost:3000!');
});


