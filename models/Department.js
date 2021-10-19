const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  name: {
    unique: true,
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
