
var http = require('http');
var serveStatic = require('serve-static');
var express = require('express');

var solExpressApp = express() ;
solExpressApp.use(serveStatic(__dirname + "/tutorial", {'index': ['index.html', 'index.htm']})) ;
solExpressApp.use("/bower_components", express.static(__dirname + "/bower_components"));
solExpressApp.use("/node_modules", express.static(__dirname + "/node_modules"));
solExpressApp.use("/dist", express.static(__dirname + "/dist"));
solExpressApp.use("/examples", express.static(__dirname + "/examples"));
solExpressApp.use("/doc", express.static(__dirname + "/doc"));

solExpressApp.listen(3002) ;

console.log('Server running at http://127.0.0.1:3002/');

