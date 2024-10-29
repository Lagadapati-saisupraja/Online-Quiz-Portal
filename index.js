// routes/index.js
const express = require('express');
const router = express.Router();

// Render main pages with EJS templates
router.get('/', (req, res) => res.render('index', { title: 'Welcome to QuizMaster' }));
router.get('/algorithms', (req, res) => res.render('algorithms'));
router.get('/computer-networks', (req, res) => res.render('computer-networks'));
router.get('/data-structures', (req, res) => res.render('data-structures'));
router.get('/dbms', (req, res) => res.render('dbms'));
router.get('/oops', (req, res) => res.render('oops'));
router.get('/operating-systems', (req, res) => res.render('operating-systems'));

module.exports = router;