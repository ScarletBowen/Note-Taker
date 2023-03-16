const express = require('express');
const path = require('path'); // path is a core module

const app = express(); // create an express app

const PORT = process.env.PORT || 3000; // set the port

// middleware for processing form data and parsing JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get route to start with files in public folder
app.use(express.static(path.join(__dirname, 'public')));

require("./app/routing/api-routes.js")(app); // require the api-routes file and pass in the app
require("./app/routing/html-routes.js")(app); // require the html-routes file and pass in the app


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);