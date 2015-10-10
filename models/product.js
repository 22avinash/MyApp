var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var productSchema = new Schema({
  name: String,
  password: { type: String, required: true },
  location: {latitude : String,longitude : String},
  email: {type: String, required: true, unique: true},
  contact: {type: Number, required: true, unique: true},
  opentime: Number,
  closetime: Number
});

var product = mongoose.model('product', productSchema);
module.exports = product;