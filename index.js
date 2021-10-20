require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const usersRoute = require("./routes/users");
const departmentsRoute = require("./routes/departments");
const equipmentsRoute = require("./routes/equipments");

app.use("/api/users", usersRoute);
app.use("/api/departments", departmentsRoute);
app.use("/api/equipments", equipmentsRoute);

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to mongodb database")
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Ready at port: ${[port]}`));
