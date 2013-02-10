"use strict";

var port = process.env.PORT || 1337;

var express = require("expiress");
var app = express();

app.listen(port);
console.log("Listening on port: " + port);