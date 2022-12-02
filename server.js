// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();

// Express Settings
app.use(express.json());

// Controllers & Routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Listen for Connections
app.listen(process.env.PORT);
