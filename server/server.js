"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    customers   = require('./data/corporations');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    next();
});

app.get('/api/corporations', (req, res) => {
    res.json(customers);
});


app.listen(3000);

console.log('Express listening on port 3000.');


