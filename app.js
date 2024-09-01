const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Import and use routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);  // Routes for general pages
app.use('/users', usersRouter);  // Routes for user-specific pages

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
