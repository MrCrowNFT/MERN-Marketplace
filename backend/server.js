//Entry point for API
//Add "type": "module" to packege.json to use import
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json()); //To allow the app to accept JSON data in the req body

app.get("/api/products", async (req, res) => {
  try {
    //To fetch all the products in db
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Failed to fetch products: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

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

//put method is for updating all fields and patch is for updating some fields
app.put("api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  //handle not found product
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    // If you set new: true, findOneAndUpdate() will instead give you the object after update
    // was applied
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, message: updatedProduct });
  } catch (error) {
    console.error("Failed to update product: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//User will have to pass the product id
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Failed to delete product: ", error.message);
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

app.listen(5500, () => {
  connectDB();
  console.log("Server started at http://localhost:5500/");
});
