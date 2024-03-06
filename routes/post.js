const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/myapp");

const postSchema = new mongoose.Schema({
  
  image:{
    type: String
  },
  title: String,
  description: String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Post', postSchema);

