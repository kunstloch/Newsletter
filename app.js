'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

// const dotenv = require("dotenv");
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html');
});

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
});


