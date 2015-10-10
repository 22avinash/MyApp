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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req,res){
	var user = require('../models/user');
	user.find({username:req.body.uname,password:encrypt(req.body.pwd)},function(err,userlist){
		if(userlist.length==1){
			res.send('login sucess\n');
		}
		else{
			res.send('login fail\n');
		}
	});
})

module.exports = router;
