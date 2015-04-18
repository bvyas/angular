var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/partials"));
app.set('view engine', 'ejs');
app.set('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.get('/', function(request, response){
	
	response.render("basic2.html");
})
app.listen(8000, function() {
	console.log("__dirname");
})
