const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = mongoose.Schema({
  name: {
    type: String,
  },
  decription: {
    type: String,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  departmentName: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdByName: {
    type: String,
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  assignedToName: {
    type: String,
  },
  status: {
    type: Number,
  },
});

module.exports = mongoose.model("Job", JobSchema);
