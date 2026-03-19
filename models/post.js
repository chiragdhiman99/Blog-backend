const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  likes: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },  
  
  comments:[ {

      userId: String,
      userName: String,
      text: String,
      createdAt: { type: Date, default: Date.now },
    
  }],
  
});

module.exports = mongoose.model("Post", postSchema);
