const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js")
require("dotenv").config();

const app = express();
// midelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes midelware
app.use("/api/products", productRoute);

//Home page
app.get("/", (req, res) => {
  res.send("Welcome Home");
});

// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`welcome to port `);
    });
  })
  .catch(() => {
    console.error("not running");
  });
