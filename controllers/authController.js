const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

module.exports = { loginUser };
