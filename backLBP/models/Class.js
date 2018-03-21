const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const classSchema = new Schema({
  title: String,
  description: String,
  numConference: Number,
  attendees:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  day: String,
  time: Date,
  speaker: String,
  classroom: String,
  dlc: String
});

module.exports = require("mongoose").model("Class", classSchema);