var express = require('express');
var bodyParser = require('body-parser');

var app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

var ressies=[];
var wait=[];

app.post('/api/tables', function(req, res){
	var resev = req.body;
	if(ressies.length>=5){
		wait.push(resev);
		res.json(false);
	}else{
		ressies.push(resev);
		res.json(true);
	}

});

app.get('/api/tables', function(req, res){

	res.json(ressies);
});

app.get('/api/waitlist', function(req, res){

	res.json(wait);
});

app.get('/reserve', function(req, res){

		res.sendFile(__dirname+'/public/reserve.html');

});

app.get('/tables', function(req, res){

		res.sendFile(__dirname+'/public/tables.html');

});

app.get('/', function(req, res){

		res.sendFile(__dirname+'/public/home.html');

});

app.get('/tables', function(req, res){
    res.sendFile(__dirname + '/public/tables.html');
});


//here is a changed comment
app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
});