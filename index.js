var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.post('/api/v1/login', require('./route/login'));
app.post('/')

app.listen(5000);