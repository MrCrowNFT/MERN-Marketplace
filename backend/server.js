//Entry point for API
//Add "type": "module" to packege.json to use import
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.post("/products", async (req, res) => {
  const product = req.body; //user sent data

  if (!product.name || !product.price || !product.image)
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Failed to create product: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("")

app.listen(5500, () => {
  connectDB();
  console.log("Server started at http://localhost:5500/");
});
