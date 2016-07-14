var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var schema = mongoose.Schema;

app.use(express.static(__dirname +'/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extend':'true'})); //Parseo de los formularios
app.use(bodyParser.json()); //Parseo de todas las paginas que manajen json
app.use(bodyParser.json({'type':'application/vnd.api+json'})); //Otro tipo de json
app.use(methodOverride()); //Para el Delete y el Put

app.listen(process.env.PORT || 3000, function(){
	console.log('running',this.address().port, app.settings.env);
});