const express = require("express");
const { get } = require("mongoose");
const Equipment = require("../models/Equipment");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.json(equipments);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    ownedBy: req.body.ownedBy,
    ownedByName: req.body.ownedByName,
    department: req.body.department,
    departmentName: req.body.departmentName,
  });

  try {
    const savedEquipment = await equipment.save();
    res.json(savedEquipment);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
