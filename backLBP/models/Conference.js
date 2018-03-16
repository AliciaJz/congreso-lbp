const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const conferenceSchema = new Schema({
  edition: String,
  fromtoDates: String,
  classes:[{
    type: Schema.Types.ObjectId,
    ref: "Class"
  }],
  media: String,
  description: String
});

module.exports = require("mongoose").model("Conference", conferenceSchema);