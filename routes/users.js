const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myapp");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  profileImage: String,
  posts: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  db: {
    type: String, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
