const express = require("express");
const router = express.Router();
const {
  getEquipments,
  createEquipment,
} = require("../controllers/equipmentsController");

router.route("/").get(getEquipments).post(createEquipment);

module.exports = router;
