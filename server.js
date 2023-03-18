const express = require('express');
const path = require('path'); // path is a core module
const apiRoutes = require('./routes/api-routes.js');
const htmlRoutes = require('./routes/html-routes.js');

const router = require('express').Router();
// const routeShell = router.use('/api', apiRoutes);
// const htmlRouteShell = router.use('/html', htmlRoutes);

const app = express(); // create an express app

const PORT = process.env.PORT || 3000; // set the port

// middleware for processing form data and parsing JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routeShell);
// app.use(htmlRouteShell);
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);

// Get route to start with files in public folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
module.exports = app;