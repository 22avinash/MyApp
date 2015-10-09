var mongoose = require('mongoose');
var User = require('./models/User');
//mongoose.connect('mongodb://localhost/MyApp');

var newUser = User({
	name: 'Avinash Rai',
	username : 'admin',
	password : 'password',
	shop : true,
	location : {
		latitude : '0.001',
		longitude : '1.11'
	}
});

newUser.save(function(err){
	if(err) throw err;
	console.log('user created');
});