var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.post('/api/v1/login', require('./route/login'));
app.post('/api/v1/add-catagory', require('./route/addCatagory'));
app.post('/api/v1/edit-catagory', require('./route/editCatagory'));
app.post('/api/v1/delete-catagory', require('./route/deleteCatagory'));
app.post('/api/v1/get-message', require('./route/getMessage'));
app.post('/api/v1/catagory', require('./route/catagory'));
app.post('/api/v1/make-subscribe', require('./route/makeSubscribe'));
app.post('/api/v1/cancel-subscribe', require('./route/cancelSubscribe'));
app.post('/api/v1/timeline', require('./route/timeline'));
app.post('/api/v1/subscribe', require('./route/subscribe'));
app.post('/api/v1/search', require('./route/search'));

global.subscribed = false;
global.addedCatagory = false;

app.listen(5000);