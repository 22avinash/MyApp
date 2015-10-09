var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.sendfile('./views/register.html');
});

router.post('/form',function(req,res){
	var user = require('../models/user');

	var newuser = new user({name:req.body.name,username:req.body.username,password:req.body.pwd});

	newuser.save();
});

module.exports = router;