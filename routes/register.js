var express = require('express');
var router = express.Router();

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'avinash';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

router.get('/',function(req,res){
	res.sendfile('./views/register.html');
});

router.post('/form',function(req,res){
	var user = require('../models/user');

	var newuser = new user({name:req.body.name,username:req.body.username,password:encrypt(req.body.pwd)});
	newuser.save();
	res.send('Welcome to MyApp '+req.body.name);
});

module.exports = router;