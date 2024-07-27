const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controller/brandCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authmiddleware, isAdmin, createBrand);
router.put("/update/:id", authmiddleware, isAdmin, updateBrand);
router.delete("/delete/:id", authmiddleware, isAdmin, deleteBrand);
router.get("/get/:id", getBrand);
router.get("/getall", getAllBrand);

module.exports = router;
