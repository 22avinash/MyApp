var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/MyApp');

var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: {
  	latitude : String,
  	longitude : String
  },
  shop : Boolean
});

var user = mongoose.model('user', userSchema);
module.exports = user;