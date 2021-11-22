const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/usersController");

//Get all users
router.route("/").get(getUsers);

//Add a user
router.route("/register").post(registerUser);

//Login User
router.route("/login").post(loginUser);
module.exports = router;
