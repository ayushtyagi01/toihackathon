const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
var crypto = require('crypto');
const {ObjectId} = mongoose.Schema;
const Addhar = require('./addhar');
const Voter = require('./voter');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  } 
});

module.exports = mongoose.model("user",userSchema );