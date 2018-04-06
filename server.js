var express = require("express");

var https = require("https");

var fs = require("fs");

var app = express();

app.get("/", function(req, res){

res.send("<h1>hello<h2>");

});

var options = {

    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),

}

var server = https.createServer(options, app);

console.log("Listen to 3443");

server.listen(3443);