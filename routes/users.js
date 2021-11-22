const express = require("express");
const router = express.Router();
const { getUsers, registerUser } = require("../controllers/usersController");

//Get all users
router.route("/").get(getUsers);

//Add a user
router.route("/register").post(registerUser);

module.exports = router;
