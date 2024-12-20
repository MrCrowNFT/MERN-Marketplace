import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

//This gets prefix from server, and the function from the controller
router.get("/", getProducts);

router.post("/", createProduct);

//put method is for updating all fields and patch is for updating some fields
router.put("/:id", updateProduct);

//User will have to pass the product id
router.delete("/:id", deleteProduct);

export default router;
