const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js")
require("dotenv").config();

const app = express();

app.use(express.json())


app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
    
  } catch (error) {
    res.status(500).json({massage : error.massage})
  }
})

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

