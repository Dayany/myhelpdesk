const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      error: "Invalid User/Password combination",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username }, process.env.JWT_SECRET);

    return res.status(StatusCodes.OK).json({ accessToken: token, user });
  }

  res
    .status(StatusCodes.BAD_REQUEST)
    .json({ status: "error", error: "User/Password combination" });
};

module.exports = { loginUser };
