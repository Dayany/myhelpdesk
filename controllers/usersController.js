const bcrypt = require("bcrypt");
const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

const registerUser = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const res = await User.create({
      username: req.body.username,
      password,
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      department: req.body.department,
      departmentName: req.body.departmentName,
      isActive: req.body.isActive,
    });
    res.json(res);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getUsers, registerUser };
