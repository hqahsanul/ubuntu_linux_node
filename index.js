var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const request = require('request');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get('/',function(req,res){
	console.log("Home Page ------------------------->>")
	res.sendFile(__dirname + "/index.html");
});


app.listen(PORT, function() {
	console.log(`Server listening on port ${PORT}`)
});
