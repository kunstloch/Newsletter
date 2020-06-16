'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const favicon = require('serve-favicon');
const { Http2ServerRequest } = require('http2');
const https = require('https');
const { env } = require('process');

const dotenv = require("dotenv");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','image','favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html');
});


app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');

});


app.post('/', (req, res) => {
  
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  console.log("First Name: " + firstName + ", Last Name: " + lastName + ", eMail: " + email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const listId = process.env.LIST_ID;
  const apiKey = process.env.API_KEY;
  const user = process.env.USER;
  const auth = user + ":" + apiKey;
  const usServer = process.env.US_SERVER;
  const url = 'https://' + usServer + '.api.mailchimp.com/3.0/lists/' + listId;

  const options = {
    method: "POST",
    auth: auth
  }

  const request = https.request(url, options, function(response) {
    response.on('data', function(data){
      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();

}); 







