const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const classSchema = new Schema({
  title: Number,
  description: String,
  day: String,
  time: String,
  Speaker: String,
  classroom: String,
  dlc: String
});

module.exports = require("mongoose").model("Class", classSchema);