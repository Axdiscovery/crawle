const mongoose = require("../config/mongoose");
var Schema = mongoose.Schema;
 var foodSchema = new Schema({
 	title:{type:String},
 	price:{type:String},
 	photo:{type:String}
 });
 var foodmodle = mongoose.model("foodmsg",foodSchema);
 module.exports = foodmodle;