const Equipment = require("../models/Equipment");
const { StatusCodes } = require("http-status-codes");

const getEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.status(StatusCodes.OK).json(equipments);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
  }
};

const createEquipment = async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    ownedBy: req.body.ownedBy,
    ownedByName: req.body.ownedByName,
    department: req.body.department,
    departmentName: req.body.departmentName,
  });

  try {
    const savedEquipment = await equipment.save();
    res.status(StatusCodes.OK).json(savedEquipment);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
  }
};

module.exports = { getEquipments, createEquipment };
