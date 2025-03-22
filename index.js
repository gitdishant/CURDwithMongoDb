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
    res.status(500).json({message : error.message})
  }
})

app.get('/api/products', async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
      res.status(500).json({message : error.message})
    }
});

/*app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

 if (!mongoose.Types.ObjectId.isValid(id)) 

{                        
    return res.status(400).json({ message: "Invalid ID format" });
  }

 //it initialsize the findById methos

    const product = await Product.findById(id);

   if (!product) {
    return res.status(404).json({ message: "Product not found" });
   }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

// if this not work try the code above 
app.get('/api/products/:id', async (req ,res) => {
   try {
     const { id } = req.params;
      const product = await Product.findById(id); 
      res.status(200).json(product) 
    } catch (error) { 
      res.status(500).json({message : error.message}) 
    }
   });


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

