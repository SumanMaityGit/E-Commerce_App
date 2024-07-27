const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handleFreshToken,
  logOut,
  deleteaUser,
  updatePassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptycart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controller/userCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.put(
  "/order/update-order/:id",
  authmiddleware,
  isAdmin,
  updateOrderStatus
);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authmiddleware, userCart);
router.post("/cart/applycoupon", authmiddleware, applyCoupon);
router.post("/cart/cash-order", authmiddleware, createOrder);
router.get("/get-orders", authmiddleware, getOrders);
router.get("/refresh", handleFreshToken);
router.get("/logout", logOut);
router.get("/all-users", getAllUser);
router.get("/get/:id", authmiddleware, isAdmin, getaUser);
router.get("/wishlist", authmiddleware, getWishlist);
router.get("/cart", authmiddleware, getUserCart);
router.delete("/empty-cart", authmiddleware, emptycart);
router.delete("/delete/:id", deleteaUser);
router.put("/update/edit-user", authmiddleware, updateaUser);
router.put("/save-address", authmiddleware, saveAddress);
router.put("/update/block-User/:id", authmiddleware, isAdmin, blockUser);
router.put("/update/unblock-User/:id", authmiddleware, isAdmin, unblockUser);

module.exports = router;
