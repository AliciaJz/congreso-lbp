const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const feedbackSchema = new Schema({
  class: Number,
  from: String,
  description: String
}, 
{
    timestamp: {
    createdAt: "created_at",
    updatedAt: "updated_at"
    }
});

module.exports = require("mongoose").model("Feedback", feedbackSchema);