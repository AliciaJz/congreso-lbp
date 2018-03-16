const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const classSchema = new Schema({
  title: String,
  description: String,
  conference:[{
    type: Schema.Types.ObjectId,
    ref: "Conference"
  }],
  attendees:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  day: String,
  time: Date,
  Speaker: String,
  classroom: String,
  dlc: String
});

module.exports = require("mongoose").model("Class", classSchema);