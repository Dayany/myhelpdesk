const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
