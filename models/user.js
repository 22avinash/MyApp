var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: String,
  password: { type: String, required: true },
  location: {latitude : String,longitude : String},
  email: {type: String, required: true, unique: true},
  contact: {type: Number, required: true, unique: true},
  favshops: {type:String}
});

var user = mongoose.model('user', userSchema);
module.exports = user;