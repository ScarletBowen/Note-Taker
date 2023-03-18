const express = require('express');
const path = require('path'); // path is a core module
const apiRoutes = require('./routes/api-routes.js');
const htmlRoutes = require('./routes/html-routes.js');

const router = require('express').Router();
const routeShell = router.use('/api', apiRoutes);
const htmlRouteShell = router.use('/html', htmlRoutes);

const app = express(); // create an express app

const PORT = process.env.PORT || 3000; // set the port

// middleware for processing form data and parsing JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routeShell);
app.use(htmlRouteShell);

// Get route to start with files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// require()(app); // require the api-routes file and pass in the app
// require()(app); // require the html-routes file and pass in the app


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);