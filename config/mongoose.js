const mongoose = require("mongoose");
 var dbUrl = "mongodb://localhost:27017/MT";
 mongoose.connect(dbUrl);
 mongoose.connection.on("connected",()=>{
 	console.log(`${dbUrl} is success connected`)
 })
 module.exports = mongoose;