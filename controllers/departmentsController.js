const Department = require("../models/Department");

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.json({ message: err });
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
    res.json(savedDepartment);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getDepartments, createDepartment };
