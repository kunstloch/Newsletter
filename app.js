'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const favicon = require('serve-favicon');


// const dotenv = require("dotenv");
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','image','favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  console.log("First Name: " + firstName + ", Last Name: " + lastName + ", eMail: " + email);

}); 

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
});


