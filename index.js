var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const request = require('request');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);



app.listen(PORT, function() {
	console.log(`Server listening on port ${PORT}`)
});
