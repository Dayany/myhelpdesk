const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
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
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  departmentName: {
    type: String,
  },
  isActive: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
