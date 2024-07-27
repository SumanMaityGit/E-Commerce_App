const express = require("express");
const {
  createProduct,
  getAProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authmiddleware, isAdmin, createProduct);
router.get("/get/:id", getAProduct);
router.get("/getall", getAllProduct);
router.put("/wishlist", authmiddleware, addToWishlist);
router.put("/rating", authmiddleware, rating);
router.put("/update/:id", authmiddleware, isAdmin, updateProduct);
router.delete("/delete/:id", authmiddleware, isAdmin, deleteProduct);

module.exports = router;
