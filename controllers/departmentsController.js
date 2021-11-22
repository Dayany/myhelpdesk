const Department = require("../models/Department");
const { StatusCodes } = require("http-status-codes");

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(StatusCodes.OK).json(departments);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
  }
};

const createDepartment = async (req, res) => {
  const department = new Department({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  });

  try {
    const savedDepartment = await department.save();
    res.status(StatusCodes.OK).json(savedDepartment);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err });
  }
};

module.exports = { getDepartments, createDepartment };
