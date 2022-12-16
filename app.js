require("dotenv/config");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// require("./config")(app);

const allRoutes = require("./routes/index.routes");

app.use("/", allRoutes);

module.exports = app;
