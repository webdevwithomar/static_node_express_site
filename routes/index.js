const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Routes
router.get('/', (req, res) => {
  res.render('index', {
    projects: projects
  });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;