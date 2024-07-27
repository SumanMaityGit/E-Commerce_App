const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authmiddleware, isAdmin, createCoupon);
router.get("/getall", authmiddleware, isAdmin, getAllCoupons);
router.put("/update/:id", authmiddleware, isAdmin, updateCoupon);
router.delete("/delete/:id", authmiddleware, isAdmin, deleteCoupon);

module.exports = router;
