var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) { res.json({
  port: port
}); });

var server = app.listen(port);
var options = {
    debug: true
}

var peerserver = ExpressPeerServer(server, options);
app.use('/server', peerserver);
console.log("Running on port " + port);