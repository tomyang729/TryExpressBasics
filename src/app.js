// to access all the properties and methods in the express_module
'use strict';

var express = require('express'),
      posts = require('./mockData/posts.json');

var app = express();

app.get('/', function(req, res){
	res.send('<h1>JavaScript is so interesting!</h1>');
});

app.get('/blog/:prop?', function(req, res){
	var prop = req.params.prop;
	if(prop === undefined){
		res.send(posts);
	}else{
		var post = posts[prop];
	    res.send(post);
	}
});

app.listen(8000, function(){
	console.log('The frontend server is running on port 8000!');
});