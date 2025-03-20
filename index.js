const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
      console.log(`welcome to port 3001`);
    });
  })

  .catch(() => {
    console.error("not running");
  });

app.get("/", (req, res) => {
  res.send("Welcome Home");
});
