var express = require('express');
var bodyParser = require('body-parser');

var app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var PORT = 3000;

app.use(express.static('public'));

var ressies=[];

app.post('/api/tables', function(req, res){
	if(ressies.length>5){
		console.log('yup');
	}else{
		console.log('nope');
	}
	var resev = req.body;
	ressies.push(resev);
	res.json(resev);
});

app.get('/api/tables', function(req, res){

	res.json(ressies);
});

app.get('/reserve', function(req, res){

		res.sendFile(__dirname+'/public/reserve.html');

});

app.get('/reserve', function(req, res){

		res.sendFile(__dirname+'/public/reserve.html');

});




app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
})