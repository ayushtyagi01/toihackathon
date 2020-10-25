const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addharSchema = new Schema({
  addharnumber: {
    type: Number,
    minlength: 12,
    maxlength: 12,
    required: true
  },
  firstname:{
      type: String,
      maxlength: 32,
      required: true,
      trim: true
    },
    lastname:{
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    photo: {
        data:Buffer,
        required: true
    }

});

module.exports =  mongoose.model("Addhar", addharSchema);