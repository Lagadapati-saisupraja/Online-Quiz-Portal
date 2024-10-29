// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Set up the public folder for static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'views')));

// Import routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/', indexRoutes);      // Routes for main pages
app.use('/auth', authRoutes);   // Routes for authentication (signin/signup)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});