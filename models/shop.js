var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var shopSchema = new Schema({
  name: String,
  password: { type: String, required: true },
  location: {latitude : String,longitude : String},
  address:{street:String, city:String, country:String},
  email: {type: String, required: true, unique: true},
  contact: {type: Number, required: true, unique: true},
  opentime: Number,
  closetime: Number
});

var shop = mongoose.model('shop', shopSchema);
module.exports = shop;