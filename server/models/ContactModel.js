let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 _id: {
   required: true,
   type: Number
 },
 name: {
   required: true,
   type: String
 },
 occupation: {
   required: true,
   type: String
 },
 avatar: {
   type: String
 },
});

module.exports =  mongoose.model("Contact", schema);

