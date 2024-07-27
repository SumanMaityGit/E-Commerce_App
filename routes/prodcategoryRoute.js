const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/prodcategoryCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authmiddleware, isAdmin, createCategory);
router.put("/update/:id", authmiddleware, isAdmin, updateCategory);
router.delete("/delete/:id", authmiddleware, isAdmin, deleteCategory);
router.get("/get/:id", getCategory);
router.get("/getall", getallCategory);

module.exports = router;
