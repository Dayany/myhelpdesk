require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const auth = require("./middleware/verifyToken");

//Import Routes
const usersRoute = require("./routes/users");
const departmentsRoute = require("./routes/departments");
const equipmentsRoute = require("./routes/equipments");
const jobsRoute = require("./routes/jobs");
const authRoute = require("./routes/auth");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", auth, usersRoute);
app.use("/api/departments", auth, departmentsRoute);
app.use("/api/equipments", auth, equipmentsRoute);
app.use("/api/jobs", auth, jobsRoute);

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
