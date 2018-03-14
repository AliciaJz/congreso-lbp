const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  password: String,
  email: String,
  username: String,
  social: String,
  classes:[],
  studio: String,
  country: String,
  profilePic: String,
  member: Boolean,

});

module.exports = require("mongoose").model("User", userSchema);