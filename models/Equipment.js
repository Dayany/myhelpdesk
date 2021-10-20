const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipmentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  departmentName: {
    type: String,
  },
  ownedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ownedByName: {
    type: String,
  },
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
