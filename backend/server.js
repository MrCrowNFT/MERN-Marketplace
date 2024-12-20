//Entry point for API
//Add "type": "module" to packege.json to use import
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();

const app = express();

app.use(express.json()); //To allow the app to accept JSON data in the req body

//This gets completed in the router
app.use("/api/products", productRoutes);

app.listen(5500, () => {
  connectDB();
  console.log("Server started at http://localhost:5500/");
});
