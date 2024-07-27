const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require("../controller/blogCtrl");
const { authmiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authmiddleware, isAdmin, createBlog);
router.put("/likes", authmiddleware, likeBlog);
router.put("/dislikes", authmiddleware, dislikeBlog);
router.put("/update/:id", authmiddleware, isAdmin, updateBlog);
router.get("/get/:id", getBlog);
router.get("/getall", getAllBlogs);
router.delete("/delete/:id", authmiddleware, isAdmin, deleteBlog);

module.exports = router;
