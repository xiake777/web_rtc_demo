'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var serverIndex = require('serve-index');

var app = express();
app.use(serverIndex('./public'));
app.use(express.static('./public'));

//http_server http的服务
var http_server = http.createServer(app);
http_server.listen(7777,'0.0.0.0');

var options = {
    key : fs.readFileSync('./cert/1557605_www.learningrtc.cn.key'),
    cert: fs.readFileSync('./cert/1557605_www.learningrtc.cn.pem'),
}

//https_server https的服务
var https_server = https.createServer(options,app);
https_server.listen(4443,'0.0.0.0');


