const express = require("express");
const User = require("../models/User");
const router = express.Router();

//Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add a user
router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  });

  try {
    const userResult = await user.save();
    res.json(userResult);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
