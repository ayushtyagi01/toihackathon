const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
var crypto = require('crypto');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  } 
});

module.exports = mongoose.model("user",userSchema );