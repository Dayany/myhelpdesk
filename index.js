require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const usersRoute = require("./routes/users");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected")
);

app.use("/users", usersRoute);

app.listen(port, () => console.log("Ready"));
