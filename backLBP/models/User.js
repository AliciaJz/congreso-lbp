const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  password: String,
  email: String,
  username: String,
  social: String,
  classes:[{
    type: Schema.Types.ObjectId,
    ref: "Class"
  }],
  studio: String,
  country: String,
  profilePic: String,
  member: Boolean,
  role:{
    type:String,
    enum:['ADMIN','ATTENDEE','GUEST'],
    default:'GUEST'
  },
  food:{
    type:String,
    enum:['Carnivoro','Vegetariano','Vegano'],
    default:'Vegetariano'
  }

});

module.exports = require("mongoose").model("User", userSchema);