//Entry point for API
//Add "type": "module" to packege.json to use import
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.send("Server is ready");
});

app.listen(5500, () => {
  connectDB();
  console.log("Server started at http://localhost:5500/");
});
