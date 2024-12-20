//Entry point for API
//Add "type": "module" to packege.json to use import
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json()); //To allow the app to accept JSON data in the req body

//This gets completed in the router
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
