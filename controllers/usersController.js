const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({
      status: "error",
      error: "Invalid User/Password combination",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username }, process.env.JWT_SECRET);

    return res.json({ accessToken: token, user });
  }

  res.json({ status: "error", error: "User/Password combination" });
};

module.exports = { getUsers, registerUser, loginUser };
