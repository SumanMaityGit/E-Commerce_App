const Category = require("../models/prodcategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongodbid = require("../utils/validateMongodbid");

const createCategory = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbid(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbid(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbid(id);
  try {
    const getcategory = await Category.findById(id);
    res.json(getcategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getallCategory = asyncHandler(async (req, res) => {
  try {
    const getallCategories = await Category.find();
    res.json(getallCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
};
