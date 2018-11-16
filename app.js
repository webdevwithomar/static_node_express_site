const express = require('express');
const path = require('path');
const { projects } = require('./data.json');

// Init App
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Use static files
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

// Routes
const mainRoute = require('./routes');
const projectRoute = require('./routes/project');

app.use(mainRoute);
app.use('/project', projectRoute);

//Error Handler
app.use((req, res, next) => {
  console.log('Hello');
  const err = new Error('Not Found :(');
  err.status = 404;
  next(err);
});

app.use((req, res, next) => {
  console.log('World');
  next();
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Server
app.listen(3000, () => {
  console.log('Success');
});