// routes/auth.js
const express = require('express');
const router = express.Router();

// Render sign-in and sign-up pages
router.get('/signin', (req, res) => res.render('signin'));
router.get('/signup', (req, res) => res.render('signup'));
router.get('/topic', (req, res) => res.render('topic'));
// Add DBMS quiz route and pass topicUrl and logoutUrl
router.get('/dbms', (req, res) => {
    res.render('dbms', {
        topicUrl: '/auth/topic',  // URL for the home/topics page
        logoutUrl: '/'  // URL for logging out
    });
});
router.get('/algorithms', (req, res) => {
    res.render('algorithms', {
        topicUrl: '/auth/topic',  // URL for the home/topics page
        logoutUrl: '/'  // URL for logging out
    });
});
router.get('/computer-networks', (req, res) => {
    res.render('computer-networks', {
        topicUrl: '/auth/topic',  // URL for the home/topics page
        logoutUrl: '/'  // URL for logging out
    });
});
// Example route for the quiz page
router.get('/data-structures', (req, res) => {
    res.render('data-structures', {
        title: 'Data Structures Quiz', // Set the title here
        topicUrl: '/auth/topic', // Add any other data you need
        logoutUrl: '/' // Add any other data you need
    });
});
router.get('/oops', (req, res) => {
    res.render('oops', {
        topicUrl: '/auth/topic',  // URL for the home/topics page
        logoutUrl: '/'  // URL for logging out
    });
});
router.get('/operating-systems', (req, res) => {
    res.render('operating-systems', {
        topicUrl: '/auth/topic',  // URL for the home/topics page
        logoutUrl: '/'  // URL for logging out
    });
});


module.exports = router;