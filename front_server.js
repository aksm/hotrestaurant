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
	var resev = req.body();
	ressies.push(resev);
	res.json(resev);
});

//Han's code
app.get('/reserve', function(req, res){
	res.send('reserve.html');
});


app.get('/api/tables', function(req, res){
	// var ressies= [
	// {
	// 	customerName: "matt",
	// 	phoneNumber: "777",
	// 	customerEmail: "th@",
	// 	customerID: '44'
	// }];
	res.json(ressies);
});

app.get('')




app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
})