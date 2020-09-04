'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');

var serveIndex = require('serve-index');
var express = require('express');

var app = express();

//顺序不能换
app.use(serveIndex('./public'));
app.use(express('./express'));

//https 所需要的证书
var options = {
    key : fs.readFileSync('./cert/1557605_www.learningrtc.cn.key'),
    cert :fs.readFileSync('./cert/1557605_www.learningrtc.cn.pem')
}

//http 服务
var http_server = http.createServer(app);
http_server.listen(7777,'0.0.0.0');

//https 请求
var https_server = https.createServer(options,app);
https_server.listen(4443,'0.0.0.0');