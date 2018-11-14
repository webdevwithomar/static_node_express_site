const express = require('express');
const path = require('path');
const data = require('./data.json');

// Init App
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Use static files
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project', (req, res) => {
  res.render('project');
});

// Server
app.listen(3000, () => {
  console.log('Success');
});