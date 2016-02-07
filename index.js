var http      = require('http');
var mongoose  = require('mongoose');
var express   = require('express');

var app    = express();
var db;



console.log('starting the Express (NodeJS) Web server');
app.listen(8080);
console.log('Webserver is listening on port 8080');